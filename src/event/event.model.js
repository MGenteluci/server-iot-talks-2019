const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startDate: Date,
  endDate: Date,
  openArchTime: Number,
  machine: String,
  voltage: Number,
  current: Number
});

module.exports = mongoose.model('Event', eventSchema);
