const request = require('request');
const yargs = require('yargs');


const argv = yargs
  .options({
    address: {
      describe: 'Address to fetch weather for',
      demand: true,
      alias: 'a',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// const command = argv._[0];

let address = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google servers');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address');
  } else if (body.status === 'OK') {
    console.log(`Address ${body.results[0].formatted_address}`);
    console.log(`Latitude ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude ${body.results[0].geometry.location.lng}`);
  }
});
