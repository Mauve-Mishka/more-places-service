const express = require('express');
const app = express();
const { getPlaces } = require('./database/db.js');

app.use(express.static('public'));

app.get('/places', async (req, res) => {
  try {
    const places = await getPlaces();
    res.status(200).send(places);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = app;