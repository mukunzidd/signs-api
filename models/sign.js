import mongoose, { Schema } from 'mongoose';

const signsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateStart: {
    type: String,
    required: true,
  },
  dateEnd: {
    type: String,
    required: true,
  },
  dope: {
    type: Boolean,
    default: true,
  },
  luckyNumber: {
    type: Number,
    default: Math.floor(Math.random() * 100),
  },
});

module.exports = mongoose.model('Sign', signsSchema);
