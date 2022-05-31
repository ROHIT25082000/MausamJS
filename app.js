const currLocation = new LocalStorageClass(); 
const currCity = currLocation.getLocationData();
const weatherApi = new weather(currCity); 
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value; 
    weatherApi.changeLocation(city);
    currLocation.setLocationData(city);
    getWeather(); 

    $('#locModal').modal('hide');
})


function getWeather() {
    weatherApi.getWeather().then(data => {
        ui.paint(data);
    })
    .catch(err => {
        console.log(err);
    })
}
