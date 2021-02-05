const express = require('express');
const app = express();
const { getPlaces } = require('./database/helpers.js');
const data = require('../testdata.js');

app.use(express.static('public'));
app.use('/rooms/:id', express.static('public'));

app.get('/places/test', async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/places/:id', async (req, res) => {
  try {
    const places = await getPlaces();
    res.status(200).send(places);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = app;