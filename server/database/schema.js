const { Schema, model } = require('mongoose');

const placesSchema = new Schema({
  ids: [Number]
});

const Places = model('Places', placesSchema);

module.exports = {
  Places
};