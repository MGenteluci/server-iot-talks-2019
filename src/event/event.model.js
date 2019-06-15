const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  data: Date,
  tempoArcoAberto: Number,
  corrente: Number,
  tensao: Number,
  potencia: Number
});

module.exports = mongoose.model('Event', eventSchema);
