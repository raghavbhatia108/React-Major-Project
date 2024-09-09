import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city : "Delhi",
            feelsLike: 36.05,
            humidity: 94,
            temp: 29.05,
            tempMax: 29.05,
            tempMin: 29.05,
            weather: "overcast clouds"
        }
    );


    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </>
    )

}