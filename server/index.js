const app = require('./app.js');
const PORT = process.env.PORT || 5008;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

