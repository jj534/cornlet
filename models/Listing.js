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
  active: {
    type: Boolean,
    required: true
  },
  sold: {
    type: Boolean,
    required: true,
  },
  term: String,
  createdAt: {
    type: Date,
    default: new Date
  }
});

listingSchema.index({title: 'text', body: 'text'});

listingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Listing', listingSchema);