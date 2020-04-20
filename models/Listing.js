const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate-v2');

var listingSchema = Schema({
  addr: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgs: {
    type: [String],
    default: []
  },
  desc: {
    type: String,
    required: true
  },
  user: {
    uid: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },
  displayEmail: String,
  displayName: String,
  active: {
    type: Boolean,
    required: true
  },
  sold: {
    type: Boolean,
    required: true,
  },
  bookmarked: {
    type: [ String ],  // uid
    default: []
  },
  bookmarkedHistory: {
    // add only
    type: [ String ],
    default: []
  },
  term: String,
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  dateString: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: new Date
  },
  createdAt: {
    type: Date,
    default: new Date
  }
});

listingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Listing', listingSchema);