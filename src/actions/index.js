const API_KEY ='3dbdc5dae437e3169afd4df5ec99970c'
//const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios'
//http://api.openweathermap.org/data/2.5/forecast?q=New%20York,%20US&apikey=3dbdc5dae437e3169afd4df5ec99970c

export const FETCH_WEATHER = 'FETCH_WEATHER'


// Action creator  
export function fetchWeather (city){
    
    const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?'
    const url = `${ROOT_URL}q=${city},US&apikey=${API_KEY}`
    const request = axios.get(url);
    console.log('promise '+ request)
    return {
        type:FETCH_WEATHER,
        payload: request
    }
}