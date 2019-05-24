const userRepository = require('./user.repository');
const { InvalidPasswordError, UserNotFoundError } = require('./user.error');

const signUp = async user => {
  return await userRepository.create(user);
};

const signIn = async user => {
  const foundUser = await userRepository.findByEmail(user.email);

  if (!foundUser) throw new UserNotFoundError();
  if (user.password !== foundUser.password) throw new InvalidPasswordError();

  return foundUser;
};

module.exports = {
  signUp,
  signIn
};
