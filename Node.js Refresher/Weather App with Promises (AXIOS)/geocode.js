var axios = require('axios');

let geocode = function(address) {

    let encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject)=>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key= AIzaSyBMUWnwrlTwU4CEXMqUSl7OLGX_h5pKhs0`).then((res)=>{
            let location = {
                address: res.data.results[0].formatted_address,
                lat: res.data.results[0].geometry.location.lat,
                lng: res.data.results[0].geometry.location.lng
            };

            resolve(location);

        }).catch((errorMesasge)=>{
            reject(errorMesasge);
        });
    });

};

let getweather = function(address){
    geocode(address).then((loc)=>{
       axios.get(`https://api.darksky.net/forecast/0968e69889596a455e93571aa26236a9/${loc.lat},${loc.lng}`).then((res)=>{
           console.log("Temperature: ", res.data.currently.temperature);
           console.log("Timezone: ", res.data.timezone);
           console.log("Summary: ", res.data.currently.summary);
           console.log("Address: ", loc.address);
       }).catch((errorMessage)=>{
          console.log("Error: ", errorMessage);
       });
    }).catch((errorMessage)=>{
        console.log(errorMessage);
    });
};

module.exports = {
    getweather:getweather
};