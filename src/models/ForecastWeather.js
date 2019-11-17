const CurrentWeather = require('./CurrentWeather');

class ForecastWeather {
    constructor(rawData) {
        super(rawData);
        this.time = rawData.dt;
    }
}

module.exports = ForecastWeather;