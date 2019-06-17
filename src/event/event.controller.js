const eventRepository = require('./event.repository');
const BigNumber = require('bignumber.js');

const save = async(req, res) => {
  const event = req.body;

  try {
    await eventRepository.create(event);

    return res.status(201).json({ message: 'Created' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed saving event to database' });
  }
}

const find = async(req, res) => {
  const date = req.params.date;

  try {
    const events = await eventRepository.find(date);

    if (events.length === 0)
      return res.status(404).json({ message: `No events found for day: ${date}` });

    const relatory = {
      tempoArcoAberto: 0,
      consumoDiario: 0
    };

    events.map(event => {
      relatory.tempoArcoAberto += event.tempoArcoAberto;
      relatory.consumoDiario += event.potencia;
    });

    relatory.tempoArcoAberto = new BigNumber(relatory.tempoArcoAberto).dividedBy(60).toFixed(1);
    relatory.consumoDiario = new BigNumber(relatory.consumoDiario).dividedBy(1000).toFixed(1);

    return res.status(200).json(relatory);
  } catch (err) {
    return res.status(500).json({ error: 'Failed reading events from database' });
  }
}

module.exports = {
  save,
  find
};
