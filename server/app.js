const express = require('express');
const app = express();
const db = require('./database/db.js');
const { getPlacesDetails } = require('./database/helpers.js');
const data = require('../testdata.js');

app.use(express.static('public'));
app.use('/rooms/:id', express.static('public'));

app.get('/places/:id', async (req, res) => {
  try {
    const places = await getPlacesDetails(req.params.id);
    console.log(places)
    res.status(200).send(places);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = app;