const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate-v2');

var listingSchema = Schema({
  uid: {
    type: String,
    unique: true,
    required: true
  },
  bookmarks: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Listing' }],
    default: []
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
module.exports = mongoose.model('Bookmark', listingSchema);