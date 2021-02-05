const { Places } = require('./schema.js');

const createPlaces = async (ids) => {
  try {
    const places = new Places({ids});
    const data = await places.save();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getPlaces = async () => {
  try {
    const { ids } = await Places.findOne({});
    const twelveRandomPlaces = [];
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * ids.length);
      twelveRandomPlaces.push(ids[randomIndex]);
    }
    return twelveRandomPlaces;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPlaces,
  getPlaces
};