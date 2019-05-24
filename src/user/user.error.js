class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class InvalidPasswordError extends UserError {
  constructor() {
    super('Invalid password');
  }
}

class UserNotFoundError extends UserError {
  constructor() {
    super('User not found');
  }
}

module.exports = {
  UserError,
  InvalidPasswordError,
  UserNotFoundError
};
