const mongoose = require('mongoose');

module.exports = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  } catch (err) {
    console.log(`MongoError: ${err}`);
    throw new Error('Error connecting to MongoDB');
  }
};
