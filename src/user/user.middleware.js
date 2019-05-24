const userUtil = require('./user.util');
const userRepository = require('./user.repository');

exports.validatePayload = async(req, res, next) => {
  if (!req.body.name)
    return res.status(400).json({ error: 'name is required'});

  if (!req.body.email)
    return res.status(400).json({ error: 'email is required'});

  if (!req.body.password)
    return res.status(400).json({ error: 'password is required'});

  if (!userUtil.isNameValid(req.body.name))
    return res.status(400).json({ error: 'name is not in a valid format'});

  if (!userUtil.isEmailValid(req.body.email))
    return res.status(400).json({ error: 'email is not in a valid format'});

  if (req.body.password.length < 6)
    return res.status(400).json({ error: 'password must have at least 6 characters'});

  return next();
}

exports.isUserCreated = async(req, res, next) => {
  const user = await userRepository.findByEmail(req.body.email);

  if (user)
    return res.status(409).json({ error: 'email already in use' });

  return next();
};

exports.validateSignIn = async(req, res, next) => {
  if (!req.body.email)
    return res.status(400).json({ error: 'email is required'});

  if (!userUtil.isEmailValid(req.body.email))
    return res.status(400).json({ error: 'email is not in a valid format'});

  if (!req.body.password)
    return res.status(400).json({ error: 'password is required'});

  if (req.body.password.length < 6)
    return res.status(400).json({ error: 'password must have at least 6 characters'});

  return next();
};
