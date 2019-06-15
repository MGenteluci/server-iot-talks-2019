const mongoose = require('mongoose');
const Event = require('./event.model');

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
    startDate: { $lt : date },
    endDate: { $gte: date }
  });
};

module.exports = {
  create,
  find
};
