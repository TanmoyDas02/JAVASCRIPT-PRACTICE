const btn = document.getElementById('searchBtn')
const cityName = document.getElementById('cityName')
const API_KEY = '94149a78e3532fc93607d975e939cb48'

async function fetchDataByCoordinates(lat, lon){
    try{
        cityName.value = ''
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        let result = await res.json()
        if(result.message){
            document.getElementById('secondDiv').innerHTML = `<h1>${result.message}</h1>`
        }
        displayWeather(result)
    }catch(err){
        console.log(err)
    }
}

async function fetchData(city){
    try{
        cityName.value = ''
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        let result = await res.json()
        if(result.message){
            document.getElementById('secondDiv').innerHTML = `<h1>${result.message}</h1>`
            return;
        }
        displayWeather(result)
    }catch(err){
        console.log(err)
    }
}

btn.addEventListener('click', () => {
    fetchData(cityName.value)
})

function displayWeather({name, main, wind, weather}){
    div = `
    <div id="wearherInfo">
        <p id="temp">${main.temp}°C</p>
        <p>${weather[0].description}</p>
        <img src='https://openweathermap.org/img/w/${weather[0].icon}.png'>
        <p id="city">${name}</p>
        <div class="otherInfo">
            <div class="wind">
                <p>Wind</p>
                <p>${wind.speed} m/sec</p>
            </div>
            <div class="wind">
                <p>Pressure</p>
                <p>${main.pressure} mb</p>
            </div>
            <div class="wind">
                <p>Humidity</p>
                <p>${main.humidity}%</p>
            </div>
        </div>
    </div>
    `
    document.getElementById('secondDiv').innerHTML = div;
}

document.getElementById('currentLocation').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lati = position.coords.latitude
        let longi = position.coords.longitude
        fetchDataByCoordinates(lati, longi)
    })
})