import { useState } from "react";

const Changes = () => {
    const [color, setColor] = useState("blue")
    const [city, setCity] = useState([]);
    
    const handleChange = () => {
        if (color == "blue") {
            setColor("Green")
        } else{
            setColor("blue")
        }
    }

    const handleinp = (e) => {
        console.log(e.target.value);
        if (e.target.value == "Uttar Pradesh") {
            setCity(["Banaras", "Prayagraj", "Noida"])
        } else if (e.target.value == "Madhya Pradesh") {
            setCity(["Indore", "Ujjain", "Bhopal"])
        } else {
            setCity(["Nimbyra", "Ringas", "Colony"])
        }
    }

    return(
        <>
            <h1>Changes</h1>
            <div>
                <h4>{color}</h4>
                <button onClick={handleChange} >Change</button>
            </div>
            <hr />
            <div>
                <select onChange={handleinp} placeholder="Enter your state">
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajesthan">Rajesthan</option>
                </select>
                <br />
                <select placeholder="Enter your state">
                    <option value="Uttar Pradesh">{city[1]}</option>
                    <option value="Madhya Pradesh">{city[2]}</option>
                    <option value="Rajesthan">{city[0]}</option>
                </select>
            </div>

        </>
    )
}

export default Changes;