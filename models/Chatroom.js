const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const chatroomSchema = Schema({
  users: {
    type: [{
      uid: {
        type: String,
        requried: true,
      },
      name: {
        type: String,
        required: true,
      },
      photoURL: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      seen: {
        type: Boolean,
        default: false,
      },
    }],
    required: true,
  },
  listing: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
    required: true,
  },
  msgs: {
    type: [{
      type: {  // txt || img
        type: String,
        default: 'txt',
      },
      content: {
        type: String,
        required: true,
      },
      uid: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: new Date
      }
    }],
    default: [],
  }
}, {
  timestamps: true,
});

chatroomSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Chatroom', chatroomSchema);
