const axios = require('axios');
const recognition = require('./recognition');
const {STREET_API_KEY} = require('../keys');

// https://maps.googleapis.com/maps/api/streetview?location=41.403609,2.174448&size=456x456&key=YOUR_API_KEY

const locationHandler = (locations) => {
  locations = locations.map((loc) => {
    const location = loc.attributes.lat + ',' + loc.attributes.lon;
    recognition(`https://maps.googleapis.com/maps/api/streetview?location=${location}&size=640x4000&key=${STREET_API_KEY}`);
    return location;
  });
};

// const location = '37.7378785,-122.2577476';

// streetImages(location);
// "37.7256850"
// "-122.2461390"
// https://maps.googleapis.com/maps/api/streetview?location=37.726969,-122.247919&size=456x456&key=

// "37.7269690"
// "-122.2479190"

module.exports = locationHandler;