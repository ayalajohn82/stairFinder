const axios = require('axios');
const convert = require('xml-js');
const options = {ignoreComment: true, alwaysChildren: true};

var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];

const streetLocations = () => {
  axios.get('https://api.openstreetmap.org/api/0.6/map?bbox=-122.29,37.70,-122.22,37.71')
    .then((response) => {
      var result = convert.xml2js(response.data, options).elements[0].elements; // or convert.xml2json(xml, options)
      console.log(result); 
    })
    .catch((error) => {
      console.log(error);
    });
};

streetLocations();