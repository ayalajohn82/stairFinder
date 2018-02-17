const axios = require('axios');
const {STREET_API_KEY} = require('../keys');

// https://maps.googleapis.com/maps/api/streetview?location=41.403609,2.174448&size=456x456&key=YOUR_API_KEY

const streetImages = (location) => {
  axios.get(`https://maps.googleapis.com/maps/api/streetview?location=${location}&key=${STREET_API_KEY}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(eror);
    });
}; 

