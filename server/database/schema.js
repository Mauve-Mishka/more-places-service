const { Schema, model } = require('mongoose');

const placesSchema = new Schema({
  id: Number,
  places: [Number]
});

const Places = model('Places', placesSchema);

module.exports = {
  Places
};