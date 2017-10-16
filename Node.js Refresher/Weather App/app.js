var argv = require('yargs').argv;
var geocode = require('./geolocation');

let address = argv.a;

console.log("Please wait while results are being fetched ...")
geocode.getweather(address, (weather)=>{
    console.log(`Address: ${weather.address}`);
    console.log(`TimeZone: ${weather.timezone}`);
    console.log(`Weather Summary: ${weather.summary}`);
    console.log(`Windspeed: ${weather.windspeed}`);
});
