const dummyRouter = require('express').Router();
const Chatroom = require('../models/Chatroom');
const User = require('../models/User');
const Listing = require('../models/Listing');

const findUsersWithMostChats = async () => {
  const chatrooms = await Chatroom.find();
  const map = {};
  chatrooms.forEach((chatroom) => {
    chatroom.uids.forEach((uid) => {
      if (!map[uid]) {
        map[uid] = 1;
      }
      else {
        map[uid] += 1;
      }
    });
  });
  const sortable = [];
  for (const vehicle in map) {
    sortable.push([vehicle, map[vehicle]]);
  }

  sortable.sort((a, b) => a[1] - b[1]);

  const last20 = sortable.slice(Math.max(sortable.length - 20, 0));
  const ownerData = [];
  const userData = [];
  const promises = last20.map((arr) => {
    return new Promise(async (resolve, reject) => {
      try {
        const uid = arr[0];
        const listings = await Listing.find({ 'user.uid': uid });
        const listing = listings[0];

        ownerData.push({
          name: listing.user.name,
          email: listing.user.email,
        });
        resolve();
      }
      catch (e) {
        try {
          const uid = arr[0];
          const user = await User.findOne({ uid });
          userData.push({
            name: user.name,
            email: user.email,
          });
          resolve();
        }
        catch (err) {
          console.log('final error', err);
        }
      }
    })
  })

  Promise.all(promises)
    .then(() => {
      console.log('ownerData', ownerData);
      console.log('userData', userData);
    });
};

const checkListingUserUidMismatch = async () => {
  try {
    // check if Listing.user.uid only contain numbers
    const listings = await Listing.find();
    listings.forEach(async (listing) => {
      const isnum = /^\d+$/.test(listing.user.uid);
      if (!isnum) {
        const user = await User.findOne({ email: listing.user.email });
        if (!user) {
          console.log('user record not created');
        }
        else {
          if (user.uid !== listing.user.uid) {
            console.log('uid mismatch', user.uid, listing.user.uid);
          }
          else {
            console.log('old uid matched');
          }
        }
      }
    })
  }
  catch (e) {
    console.log(`error: ${e}`);
  }
};

const checkChatroomUserUidMismatch = async () => {
  try {
    // check if Listing.user.uid only contain numbers
    const chatrooms = await Chatroom.find().populate('listing');
    let match = 0;
    let mismatch = 0;
    chatrooms.forEach(async (chatroom) => {
      const owner = await User.findOne({ email: chatroom.listing.user.email });

      if (!owner) {
        console.log('user record not created');
      }
      else {
        if (chatroom.uids.includes(owner.uid)) {
          match += 1;
          console.log('chatroom uids match', match);
        }
        else {
          mismatch += 1;
          chatroom.uids.push(owner.uid);
          console.log('mismatch', owner.uid, chatroom.uids, mismatch);
          // await chatroom.save();
        }
      }
    })
  }
  catch (e) {
    console.log(`error: ${e}`);
  }
};

// checkChatroomUserUidMismatch();

const logListingData = async () => {
  try {
    // find how many listings are active, inactive, deleted
    const listings = await Listing.find();
    let active = 0;
    let inactive = 0;
    let deleted = 0;

    listings.forEach((listing) => {
      if (listing.deleted) {
        deleted += 1;
      }
      else {
        if (listing.active) {
          console.log(listing.user.uid);
          active += 1;
        }
        else {
          inactive += 1;
        }
      }
    })

    console.log(active, inactive, deleted);
    // 65 39 32
  }
  catch (e) {
    log('logListingData', e);
  }
};

const logUserDataByName = async (name) => {
  try {
    const user = await User.findOne({ name });
    console.log('user', user);
    const listings = await Listing.find({ 'user.name': name });
    console.log('listings', listings);
    const chatrooms = await Chatroom.find({});
  }
  catch (e) {
    log('findListingByUserName', e);
  }
};

const manipluateCornletTester = async () => {
  try {
    const email = 'cornlettester2@gmail.com';

    // delete user
    const user = await User.findOneAndDelete({ email });
    console.log('user', user);

    // mutate listing.user.uid
    const listings = await Listing.find({ 'user.email': email });
    listings.forEach((listing) => {
      listing.user.uid = 'abc';
      listing.save();
    })
    console.log('listings', listings);
  }
  catch (e) {
    log('manipulateCornletTester', e);
  }
};

// manipluateCornletTester();

// logUserDataByName('Sophie Ruan');

// logListingData();

module.exports = dummyRouter;
