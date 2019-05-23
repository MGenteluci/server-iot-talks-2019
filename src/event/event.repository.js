const mongoose = require('mongoose');
const Event = require('./event.model');

const create = async event => {
  await Event.create({
    _id: mongoose.Types.ObjectId(),
    startDate: event.startDate,
    endDate: event.endDate,
	  openArchTime: event.openArchTime,
	  machine: event.machine,
	  current: event.current,
	  voltage: event.voltage
  });
};

const find = async date => {
  return await Event.find({
    startDate: { $lt : date },
    endDate: { $gte: date }
  });
};

module.exports = {
  create,
  find
};
