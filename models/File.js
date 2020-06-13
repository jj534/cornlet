const mongoose = require('mongoose');

const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const itemSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    requied: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

itemSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('File', itemSchema);
