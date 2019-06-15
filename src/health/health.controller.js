const findStatus = (req, res) => {
  return res.status(200).json({ status: { server: 'Up!'} });
}

module.exports = {
  findStatus
};
