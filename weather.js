const API_key = '37877dc467faad8a7fcf4e5e1620e446'

class weather {
    constructor(city) {
        this.city = city;
        this.api_key = API_key;
        this.unit = 'metric';
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}&units=${this.unit}`);
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;
    }
    changeLocation(city) {
        this.city = city; 
    }
}

