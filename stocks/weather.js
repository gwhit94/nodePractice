// const fetch = require('./node_modules/node-fetch');
const weather = require('../node_modules/openweather-apis');
const key = '549b78d1f6e7522e8fb4b10d2219597c';
// set language
weather.setLang('en');
// set api key
weather.setAPPID(key);
    // 'metric' 'internal' 'imperial'
    weather.setUnits('imperial');
    // set location
    weather.setCity('Omaha');

if (process.argv[2] == 'temp'){
    weather.setCity(process.argv[3]);
    weather.getTemperature(function(err, temp){
        console.log(temp + ' F');
    });
}
if (process.argv[2] == 'forecast'){
    weather.setCity(process.argv[3]);
    weather.getWeatherForecast(function(err, obj){
        console.log(obj);
    });
}

// Let's do another CLI example for calling an API. 
// We're going to use the OpenWeather API to pull the temperature and forecast for a specific area. 
// Take input from the user and log out the information you choose via the command line