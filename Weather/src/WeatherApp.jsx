import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function(){
     const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 23.76,
        temp: 23.1,
        humidity: 88,
        tempMin:23.1,
        tempMax: 23.1,
        weather: "thunderstorm with light rain"
     });

let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
}

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}