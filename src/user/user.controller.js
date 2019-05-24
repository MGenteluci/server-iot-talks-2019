const userService = require('./user.service');
const { UserError } = require('./user.error');

const signUp = async(req, res) => {
  try {
    const user = await userService.signUp(req.body);

    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const signIn = async(req, res) => {
  try {
    const user = await userService.signIn(req.body);

    return res.status(200).json(user);
  } catch (err) {
    const statusCode = err instanceof UserError ? 401 : 500;

    return res.status(statusCode).json({ error: err.message });
  }
};

module.exports = {
  signUp,
  signIn
};
