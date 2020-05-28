const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const formatDate = require('../util/formatDate');

const { Schema } = mongoose;

const listingSchema = Schema({
  addr: {
    type: String,
    required: true,
  },
  addrShort: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  toCampus: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: '',
  },
  totalRooms: {
    type: Number,
    required: true,
    default: 0,
  },
  availRooms: {
    type: Number,
    required: true,
    default: 0,
  },
  bathrooms: {
    type: Number,
    required: true,
    default: 0,
  },
  femaleRoommates: {
    type: Number,
    required: true,
    default: 0,
  },
  maleRoommates: {
    type: Number,
    required: true,
    default: 0,
  },
  amenities: {
    type: [String],
    required: true,
    default: [],
  },
  imgs: {
    type: [String],
    default: [],
  },
  desc: {
    type: String,
    required: true,
  },
  user: {
    uid: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  displayEmail: String,
  displayName: String,
  active: {
    type: Boolean,
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
  },
  cornellOnly: {
    type: Boolean,
    required: true,
    default: false,
  },
  bmed: {
    // uid of users who bookmarked this listing
    // add only
    type: [String],
    required: true,
    default: [],
  },
  term: String,
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: new Date,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date,
  },
});

listingSchema.virtual('dateString').get(function () {
  return formatDate(this.start) + ' ~ ' + formatDate(this.end);
});

listingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Listing', listingSchema);