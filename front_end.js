class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon'); 
        this.timezone = document.getElementById('w-timezone');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feels = document.getElementById('w-feels-like');
        this.winds = document.getElementById('w-wind'); 
        this.minmax = document.getElementById('w-minmax');

    }

    paint(weather) {
        this.location.textContent = weather.name + ", " + weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + " ℃";
        this.minmax.textContent = `Min: ${weather.main.temp_min}  ℃  Max: ${weather.main.temp_max} ℃`;  
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} bar`;
        this.feels.textContent = `Feels Like: ${weather.main.feels_like}℃`;
        this.winds.textContent = `Wind: ${weather.wind.speed} km/hr  ${weather.wind.deg}° from N`;
    }
}