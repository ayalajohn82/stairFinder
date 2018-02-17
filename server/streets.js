const axios = require('axios');

var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];

const streetLocations = () => {
  axios.get('https://api.openstreetmap.org/api/0.6/map?bbox=-122.75,36.8,-121.75,37.8')
    .then((response) => {
      console.log(response); 
    })
    .catch((error) => {
      console.log(error);
    });
};

streetLocations();