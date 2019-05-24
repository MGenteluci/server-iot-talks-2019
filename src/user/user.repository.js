const mongoose = require('mongoose');
const User = require('./user.model');

const create = async user => {
  return await User.create({
    _id: mongoose.Types.ObjectId(),
    name: user.name,
    email: user.email,
    password: user.password
  });
};

const findByEmail = async email => {
  return await User
    .findOne({ email })
    .select('_id name email password');
};

module.exports = {
  create,
  findByEmail
};
