const db = require('./db.js');
db.connect();

const seedPlaces = async(start, end) => {
  const ids = [];
  while (start <= end) {
    ids.push(start);
    start++;
  }

  try {
    const data = await db.createPlaces(ids);
    db.disconnect();
    return data;
  } catch (err) {
    console.error('Error while seeding:', err);
  }

};

seedPlaces(100, 199);