import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../src/SearchBox.css'
import { useState } from 'react';

export default function SearchBox () {
    const [city, setCity] = useState("");

    const handleChange = (evt) => {
        setCity(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(city);
        setCity("")
    }

    return(
        <>
        <div className='container'><h3>Search the Weather</h3></div>

        <form className='container' onChange={handleChange}>
        <TextField id="city" label="City Name" variant="standard" required value={city}/> <br />
        <Button variant="contained" type='submit' onClick={handleSubmit}>
            Send
        </Button>
        </form>
        </>
    ) 
}