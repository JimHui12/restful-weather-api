class CurrentWeather {
    constructor(rawData) {
        const {main, weather, wind} = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = this.calculateFahrenheit(main.temp_min);
        this.maxFahrenheit = this.calculateFahrenheit(main.temp_max);
        this.humidity = main.humidity;
        this.weather = weather[0].main;
        this.weatherDesc = weather[0].description;
        this.weatherIcon = weather[0].icon;
        this.windSpeed = wind.speed;
        this.windDirection = this.calculateWindDirection(wind.deg);
    }

    calculateWindDirection(degree) {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const value = Math.floor((degree + 22.5) / 45);
        return directions[value % 8];
    }

    calculateFahrenheit(celsius) {
        const fahrenheit = (celsius * 9) / 5 + 32;
        return Number.parseFloat(fahrenheit.toFixed(2));
    }
}

module.exports = CurrentWeather;