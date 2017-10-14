var requests = require('request');

let getlocation = function(address, callback){
    let encodedAddress = encodeURI(address);
    let targetURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=%20AIzaSyBMUWnwrlTwU4CEXMqUSl7OLGX_h5pKhs0`;

    let formattedAddress="";
    let latitude;
    let longitude;

    requests({
        url:targetURL,
        json:true
    },(error,response,body)=>{

        if (error){
            console.log("Could not connect to the google servers.")
        } else if (body.status === "ZERO_RESULTS"){
            console.log("Incorrect Address");
        } else {
            formattedAddress = body.results[0].formatted_address;
            latitude = body.results[0].geometry.location.lat;
            longitude = body.results[0].geometry.location.lng;

            let location = {
                lat: latitude,
                lng: longitude,
                add: formattedAddress
            };

            return callback(location);
        }
    });

};

let getweather = function(address, callback){

    getlocation(address, (location)=>{
        requests({
            url: `https://api.darksky.net/forecast/0968e69889596a455e93571aa26236a9/${location.lat},${location.lng}`,
            json: true
        },(error,response,body)=>{

            let weatherStats = {
                address: location.add,
                timezone: body.timezone,
                summary:body.currently.summary,
                windspeed:body.currently.windSpeed,
                temperature:body.currently.temperature
            };

            callback(weatherStats);

        });
     });

};

module.exports = {
  getweather:getweather
};