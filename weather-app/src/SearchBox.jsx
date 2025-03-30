import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../src/SearchBox.css'
import { useState } from 'react';

export default function SearchBox ({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6cbf058440ab833c115ad2da6e7f95bf";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                feelsLike: jsonResponse.main.feels_like,
                grndLevel: jsonResponse.main.grnd_level,
                weather: jsonResponse.weather[0].description,

            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
        
    }

    const handleChange = (evt) => {
        setCity(evt.target.value)
    }

    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault()
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
        
    }

    return(
        <>

        <form className='container' onChange={handleChange}>
        <TextField id="city" label="City Name" variant="standard" required value={city}/> <br />
        <Button variant="contained" type='submit' onClick={handleSubmit}>
            Send
        </Button>
        {error && <p>No such place exists in Api!</p> }
        </form>
        </>
    ) 
}