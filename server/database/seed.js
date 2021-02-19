const db = require('./db.js');
const { createPlace } = require('./helpers.js');
db.connect();

const seedPlaces = async(start, end) => {
  const ids = [];
  while (start <= end) {
    ids.push(start);
    start++;
  }

  Promise.all(
    ids.map(async (id) => {
      try {
        const data = await createPlace(id);
        return data;
      } catch (err) {
        console.error('Error while seeding:', err);
        return null;
      }
    })
  ).then(res => {
    console.log('Seeding complete');
    db.disconnect();
    return res;
  });

};

seedPlaces(100, 199);