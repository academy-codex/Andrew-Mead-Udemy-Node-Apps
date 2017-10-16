var geocodepromise = require('./geocode-promise');

geocodepromise.geocode("gk 1").then((body)=>{
    console.log("Formatted Address: ", body.results[0].formatted_address);
}).catch((errorMessage)=>{
   console.log(errorMessage);
});