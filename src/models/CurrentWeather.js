class CurrentWeather {
    constructor(rawData) {
        const {main, weather, wind} = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = calculateFahrenheit(main.temp_min);
        this.maxFahrenheit = calculateFahrenheit(main.temp_max);
        this.humidity = mian.humidity;
        this.weather = weather.main;
        this.weatherDesc = weather.description;
        this.windSpeed = wind.speed;
        this.windDirection = calculateWindDirection(wind.deg);
    }

    calculateWindDirection(degree) {
        return '';
    }

    calculateFahrenheit(celsius) {
        return ;
    }
}

module.exports = CurrentWeather;