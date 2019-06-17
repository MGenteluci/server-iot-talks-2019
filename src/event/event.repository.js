const mongoose = require('mongoose');
const Event = require('./event.model');
const moment = require('moment');

const create = async event => {
  await Event.create({
    _id: mongoose.Types.ObjectId(),
    data: event.data,
    tempoArcoAberto: event.tempoArcoAberto,
    corrente: event.corrente,
    tensao: event.tensao,
    potencia: event.potencia
  });
};

const find = async date => {
  return await Event.find({
    data: {
      $lt : moment(date).utcOffset(0).set({ hour: 23, minute: 59, second: 59, millisecond: 59 }).toDate(),
      $gte: moment(date).utcOffset(0).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toDate()
    },
  });
};

module.exports = {
  create,
  find
};
