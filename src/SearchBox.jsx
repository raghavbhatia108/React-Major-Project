import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
let [city, setCity] = useState("");
const [error, setError] = useState(false);

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0d78e6000b8ade4878eb8a0adbee4a65";

let getWeatherInfo = async() =>{
    try{let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
        city: city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
}catch(err){
    throw(err);
}
}

let handleChange = (evt) =>{
    setCity(evt.target.value);
}

let onSubmit = async (evt) =>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo =  await getWeatherInfo();
    updateInfo(newInfo);
    setError(false);
    }
    catch(err){
        setError(true);
    }
}

    return(
        <div>
            <h1 className='heading'>Search for the weather</h1>
            <form  className='form' onSubmit={onSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" className='SearchBox' value={city} onChange={handleChange} required />
            <Button variant="contained" className='Search' type='submit'>Search</Button>
            <br />

            </form>
            {error && <p style={{color:"red", textAlign:"center"}}>No such place exists!</p>}
        </div>
    )
}
