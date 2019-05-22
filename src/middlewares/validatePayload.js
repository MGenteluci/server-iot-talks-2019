const moment = require('moment');

module.exports = (req, res, next) => {
  if (!req.body.startDate)
    return res.status(400).json({ message: 'missing startDate' });

  if (!req.body.endDate)
    return res.status(400).json({ message: 'missing endDate' });

  if (!req.body.openArchTime)
    return res.status(400).json({ message: 'missing openArchTime' });

  if (!req.body.machine)
    return res.status(400).json({ message: 'missing machine' });

  if (!req.body.voltage)
    return res.status(400).json({ message: 'missing voltage' });

  if (!req.body.current)
    return res.status(400).json({ message: 'missing current' });

  if (!moment(req.body.startDate).isValid())
    return res.status(400).json({ message: 'startDate is not a valid Date' });

  if (!moment(req.body.endDate).isValid())
    return res.status(400).json({ message: 'endDate is not a valid Date' });

  return next();
};
