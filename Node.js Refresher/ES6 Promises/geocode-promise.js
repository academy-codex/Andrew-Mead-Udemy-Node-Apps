var request = require('request');

let geocode = (address)=>{

    return new Promise((resolve,reject)=>{
        let encodedAddress = encodeURIComponent(address);
        let URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=%20AIzaSyBMUWnwrlTwU4CEXMqUSl7OLGX_h5pKhs0`;

        request({
            url: URL,
            json: true
        }, function(error, response, body){
            if (error){
                reject(error);
            }
            resolve(body);
        });
    });

};

module.exports = {
  geocode:geocode
};