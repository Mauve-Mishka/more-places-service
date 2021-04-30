const { Places } = require('./schema.js');
const axios = require('axios');
const faker = require('faker');

const generateRandomPlaces = (start, end) => {
  try {
    const twelveRandomPlaces = [];
    for (let i = 0; i < 12; i++) {
      const randomPlaceId = Math.floor(Math.random() * (end - start)) + start;
      twelveRandomPlaces.push(randomPlaceId);
    }
    return twelveRandomPlaces;
  } catch (err) {
    console.error(err);
  }
};

const createPlace = async (id) => {
  try {
    const places = generateRandomPlaces(100, 199);
    const place = new Places({ id, places });
    const data = await place.save();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getPlaces = async (id) => {
  try {
    const places = Places.findOne({ id });
    return places;
  } catch (err) {
    console.error(err);
  }
};

const getPlaceSummary = async (id) => {
  // try {
  //   const { data } = await axios.get(`http://ec2-54-149-117-186.us-west-2.compute.amazonaws.com:5002/rooms/${id}/summary`);
  //   return data;
  // } catch (err) {
    return {
      id,
      typeOfStay: faker.random.arrayElement(['Entire house', 'Private room', 'Hotel room', 'Entire apartment']),
      numGuests: faker.datatype.number({ min: 2, max: 8 }),
      numBaths: faker.datatype.number({ min: 1, max: 4 }),
      numBeds: faker.datatype.number({ min: 2, max: 8 }),
      numBedrooms: faker.datatype.number({ min: 2, max: 8 }),
    };
  // }
};

const getPlaceThumbnail = async (id) => {
  // try {
  //   const { data } = await axios.get(`http://ec2-18-191-199-80.us-east-2.compute.amazonaws.com:5005/rooms/${id}/getPhotosByRoomId`);
  //   const thumbnailUrl = data.filter(el => el.is_primary === true)[0].storage_url;
  //   return { thumbnailUrl };
  // } catch (err) {
    return { thumbnailUrl: `https://picsum.photos/id/${faker.datatype.number({ min: 1047, max: 1083 })}/330/220` };
  // }
};

const getPlacePrice = async (id) => {
  // try {
  //   const { data } = await axios.get(`http://ec2-54-149-117-186.us-west-2.compute.amazonaws.com:5001/rooms/${id}/minNightlyRate`);
  //   return data;
  // } catch (err) {
    return { minNightlyRate: faker.datatype.number({ min: 89, max: 259 }) };
  // }
};

const getPlaceSuperhost = async (id) => {
  try {
    const { data } = await axios.get(`http://ec2-44-241-38-228.us-west-2.compute.amazonaws.com:5007/users/${id}/super`);
    return data;
  } catch (err) {
    return false;
  }
};

const getPlaceTitle = async (id) => {
  // try {
  //   const { data } = await axios.get(`http://ec2-18-191-199-80.us-east-2.compute.amazonaws.com:5006/rooms/${id}/title`, {
  //     timeout: 500
  //   });
  //   console.log(data)
  //   return { stayName: data[0].titleName };
  // } catch (err) {
    return { stayName: 'Luxury condo' };
  // }
};

const getPlacesDetails = async (id) => {
  try {
    const { places } = await getPlaces(id);
    const placesDetails = Promise.all(
      places.map((placeId) => {
        const getter = Promise.all([
          getPlaceSummary(placeId),
          getPlaceThumbnail(placeId),
          getPlacePrice(placeId),
          getPlaceSuperhost(placeId),
          getPlaceTitle(placeId),
        ])
          .then(res => {
            return {
              ...res[0],
              ...res[1],
              ...res[2],
              ...res[3],
              ...res[4],
            }
          })
          .catch(err => err);
        return getter;
      })
    ).then(res => res);

    return placesDetails;

  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPlace,
  getPlacesDetails
};