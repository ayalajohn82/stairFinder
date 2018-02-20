const Clarifai = require('clarifai');
const {C_API_KEY} = require('../keys'); 

const app = new Clarifai.App({apiKey: C_API_KEY});

const recognition = (input) => {
  app.models.predict(Clarifai.GENERAL_MODEL, input).then(
    function(response) {
      console.log(response.outputs[0].data);
    },
    function(err) {
      console.log(err);
    }
  );
};

module.exports = recognition;
