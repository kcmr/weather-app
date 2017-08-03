const request = require('request');

const API_KEY = '7e1fd95cfe31530bc20639de15507835';

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}?language=es&units=auto`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};


module.exports = {
  getWeather
};