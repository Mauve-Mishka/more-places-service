/**
 * @jest-environment node
 */

const app = require('./app.js');
const supertest = require('supertest');
const request = supertest(app);

jest.mock('./database/helpers.js');
const { getPlaces } = require('./database/helpers.js');
getPlaces.mockImplementation(() => [1, 2, 3, 4, 5, 6, 7, 8, 9]);


describe('/places/:id', () => {

  test('should return an array of numbers', async () => {

    const response = await request.get('/places/101');
    expect(response.body).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  });

});
