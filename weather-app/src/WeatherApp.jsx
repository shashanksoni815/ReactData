import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 32.55,
        grndLevel: 982,
        humidity: 4,
        pressure: 1007,
        temp: 35.26,
        tempMax: 35.26,
        tempMin: 35.26,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return ( 
        <>
            <div style={{textAlign:"center"}}>
                <h1>Weather App by Shashank Soni</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox  info={weatherInfo} />
            </div>
        </>
     );
}

export default WeatherApp;