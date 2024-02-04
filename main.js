
import { WIND_DIRECTIONS_UA } from './common.js';

getCityForIpUser().then(
    userCity => {
    const city = String(userCity).toUpperCase();
    getUserWeather(city).then(dataMap => renderWeatherWidget(dataMap));
    }
)

function getCityForIpUser(){
    const getIPUser = new Promise((resolve, reject) => {
        fetch('https://api.ipify.org?format=json')
            .then(response => {
                if (!response.ok) {
                    reject(new Error('Cервер ушел за печенькой'));
                } else {
                    resolve(response);
                }
            })
            .catch(error => {
                alert('Не удалось получить IP');
            });
    });
    
    return getIPUser
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
    
            const getPositionIPUser = new Promise((resolve, reject) => {
                fetch(`https://ipwho.is/${ipAddress}`)
                    .then(response => {
                        if (!response.ok) {
                            reject(new Error('Cервер ушел за печенькой'));
                        } else {
                            resolve(response);
                        }
                    })
                    .catch(error => {
                        alert('Не удалось получить город');
                    });
            });
    
            return getPositionIPUser;
        })
        .then(response => response.json())
        .then(data => {
             return data.city;
            })
        .catch(error => {
            console.error(error);
    });
}

function getUserWeather(userCity){
    const getWeatherData = new Promise((resolve) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ua`)
        .then(response => {
            if (!response.ok){
               reject(new Error('Cервер ушел за печенькой'));
            } else resolve(response);
        })
        .catch(error => {
            alert('Не удалось получить погоду для города');
        })
    });
    
    getWeatherData.catch(alert);
    
   return getWeatherData.then((response) => {
        return response.json();
    }).then((data) => {
        const dataMap = {
            "temp" : data.main.temp,
            "feels" : data.main.feels_like,
            "humidity" : data.main.humidity,
            "iconId" : data.weather[0].icon,
            "description" : data.weather[0].description,
            "windSpeed" : data.wind.speed,
            "windDeg" : getWindDirectionUkrainian(data.wind.deg), 
            "nameCity" : data.name,
            "timeCurrent" : getCurrentTime(data.dt),
            "pressure" : data.main.pressure
        }
        return dataMap;
    });
}

function renderWeatherWidget(data){
    const weatherWidgetSection = document.getElementById('weatherWidget');
    weatherWidgetSection.innerHTML += 
        `<div class="title-weather-block">
            <div class="title-weather-block__temp">
                <h2>Ваше місто : <span>${data.nameCity}</span></h2>
                <div class="temp-block">
                    <p class="temp">Температура повітря : ${data.temp}&#8451;</p>
                    <p class="feels-temp">Відчувається як : ${data.feels}&#8451</p>
                </div>
            </div>
            <div class="title-weather-block__wind">
                <div class="title-weather-block__wind--img-block">
                    <img class="title-weather-block__wind--img" src="https://openweathermap.org/img/w/${data.iconId}.png">
                </div>
                <p class="title-weather-block__wind--img-title">${data.description}</p>
                <p>Швидкість вітру: ${data.windSpeed} м/с</p>
                <p>Напрям: ${data.windDeg}</p>
                <p>Вологість: ${data.humidity}%</p>
                <p>Тиск: ${data.pressure} мм рт.ст.</p>
            </div>
        </div>
        <div class="time-temp">
            <h3>Дані актуальні на:</h3>
            <p>${data.timeCurrent.day}</p>
            <p>${data.timeCurrent.time}</p>
        </div>                                
        `
}

function getCurrentTime(time){
    const date = new Date(time * 1000);
    const formattedTime = {
        day: `${String(date.getDate()).padStart(2,'0')}.${String(date.getMonth() + 1).padStart(2,'0')}.${date.getFullYear()}`,
        time: `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`
    };
    return formattedTime;
}

function getWindDirectionUkrainian(degrees) {
    const index = Math.round((degrees % 360) / 45);
    return WIND_DIRECTIONS_UA[(index + 8) % 8];
}