const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const userSchema = Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  bm: {
    listings: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Listing',
      }],
      default: [],
    },
    notif: {
      type: Boolean,
      default: false,
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date,
  },
});

userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', userSchema);
