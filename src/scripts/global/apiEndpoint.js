const { BASE_URL_COVID, BASE_URL_VAKSIN } = require('./config');

const API_ENDPOINT = {
  KASUS_HARIAN: `${BASE_URL_COVID}/countries/id?strict=true`,
  REGIONS: `${BASE_URL_VAKSIN}/regions`,
  LOCATION: (province, city) =>
    `${BASE_URL_VAKSIN}/locations/${province}?city=${city}`,
};

module.exports = API_ENDPOINT;
