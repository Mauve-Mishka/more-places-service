require('dotenv').config();

const mongoose = require('mongoose');
const db = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch(err => console.error(err));

module.exports = {
  connect: () => db,
  disconnect: () => mongoose.disconnect(),
};

