const axios = require('axios');

const geocodeAddress = address => {
  let encodedAddress = encodeURIComponent(address);
  let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  return axios.get(geocodeUrl);
};

module.exports = {
  geocodeAddress
};
