const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const chatroomSchema = Schema({
  uids: {
    type: [String],
    required: true,
  },
  notifUids: {
    type: [String],
    required: true,
  },
  searcher: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
