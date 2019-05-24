const isEmailValid = email => /[\w\.]{3,}@[\w]*(\.com|\.com\.br|\.br)*/i.test(email);
const isNameValid = name => /[a-z\sáé]{3,}/i.test(name);

module.exports = {
  isEmailValid,
  isNameValid
}
