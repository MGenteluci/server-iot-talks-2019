const moment = require('moment');
const Joi = require('@hapi/joi');

const eventSchema = Joi.object().keys({
  data: Joi.date().less('now').iso().required(),
  tempoArcoAberto: Joi.number().required(),
  corrente: Joi.number().required(),
  tensao: Joi.number().valid(110, 220).required(),
  potencia: Joi.number().required()
});

exports.validatePayload = (req, res, next) => {
  const { error } = Joi.validate(req.body, eventSchema);

  if (error) return res.status(400).json(error);

  return next();
};

exports.validateDate = (req, res, next) => {
  try {
    const date = req.params.date;

    if (!moment(date).isValid())
      return res.status(400).json({ error: `[${date}] is not a valid Date` });

    if (moment(date).isAfter(moment()))
      return res.status(400).json({ error: `Date must not be after today` });

    return next();
  } catch (err) {
    return res.status(400).json({ error: `[${date}] is not a valid Date` });
  }
};
