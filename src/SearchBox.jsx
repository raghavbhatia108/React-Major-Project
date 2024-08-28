import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox(){
let [city, setCity] = useState("");

const API_GURL = "http://api.openweathermap.org/geo/1.0/direct";
const API_WURL = `https://api.openweathermap.org/data/3.0/onecall?`
const API_KEY = "0d78e6000b8ade4878eb8a0adbee4a65";

let getWeatherInfo = async() =>{
    let response = await fetch(`${API_GURL}?q=${city}&limit=1&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let lat =  jsonResponse[0].lat;
    let lon =  jsonResponse[0].lon;
    let finResponse = await fetch(`${API_WURL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    let finJsonResponse = await finResponse.json();
    console.log(finJsonResponse);
}

let handleChange = (evt) =>{
    setCity(evt.target.value);
}

let onSubmit = (evt) =>{
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
}

    return(
        <div>
            <h1 className='heading'>Search for the weather</h1>
            <form  className='form' onSubmit={onSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" className='SearchBox' value={city} onChange={handleChange} required />
            <Button variant="contained" className='Search' type='submit'>Search</Button>
            </form>

        </div>
    )
}