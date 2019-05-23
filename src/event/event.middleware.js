const moment = require('moment');

exports.validatePayload = (req, res, next) => {
  if (!req.body.startDate)
    return res.status(400).json({ error: 'missing startDate' });

  if (!req.body.endDate)
    return res.status(400).json({ error: 'missing endDate' });

  if (!req.body.openArchTime)
    return res.status(400).json({ error: 'missing openArchTime' });

  if (!req.body.machine)
    return res.status(400).json({ error: 'missing machine' });

  if (!req.body.voltage)
    return res.status(400).json({ error: 'missing voltage' });

  if (!req.body.current)
    return res.status(400).json({ error: 'missing current' });

  if (!moment(req.body.startDate).isValid())
    return res.status(400).json({ error: 'startDate is not a valid Date' });

  if (!moment(req.body.endDate).isValid())
    return res.status(400).json({ error: 'endDate is not a valid Date' });

  if (moment(req.body.startDate).isAfter(req.body.endDate))
    return res.status(400).json({ error: 'startDate must be before endDate' });

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
