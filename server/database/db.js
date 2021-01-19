require('dotenv').config();

const mongoose = require('mongoose');
const { Places } = require('./schema.js');
const db = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch(err => console.error(err));

const createPlaces = async (ids) => {
  try {
    const places = new Places({ids});
    const data = await places.save();
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  connect: () => db,
  disconnect: () => mongoose.disconnect(),
  createPlaces,
};

