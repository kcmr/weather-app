const axios = require('axios');
const API_KEY = '7e1fd95cfe31530bc20639de15507835';

const getWeather = (latitude, longitude) => {
  let weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}?language=es&units=auto`;
  return axios.get(weatherUrl);
};

module.exports = {
  getWeather
};
