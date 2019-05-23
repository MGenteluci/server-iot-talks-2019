const findStatus = (req, res) => {
  return res.status(200).json({ status: 'Up!' });
}

module.exports = {
  findStatus
};
