// import { useState } from "react";

// const Changes = () => {
//     const [color, setColor] = useState("blue")
//     const [city, setCity] = useState([]);
    
//     const handleChange = () => {
//         if (color == "blue") {
//             setColor("Green")
//         } else{
//             setColor("blue")
//         }
//     }

//     const handleinp = (e) => {
//         console.log(e.target.value);
//         if (e.target.value == "Uttar Pradesh") {
//             setCity(["Banaras", "Prayagraj", "Noida"])
//         } else if (e.target.value == "Madhya Pradesh") {
//             setCity(["Indore", "Ujjain", "Bhopal"])
//         } else {
//             setCity(["Nimbyra", "Ringas", "Colony"])
//         }
//     }

//     return(
//         <>
//             <h1>Changes</h1>
//             <div>
//                 <h4>{color}</h4>
//                 <button onClick={handleChange} >Change</button>
//             </div>
//             <hr />
//             <div>
//                 <select onChange={handleinp} placeholder="Enter your state">
//                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                     <option value="Rajesthan">Rajesthan</option>
//                 </select>
//                 <br />
//                 <select placeholder="Enter your state">
//                     <option value="Uttar Pradesh">{city[1]}</option>
//                     <option value="Madhya Pradesh">{city[2]}</option>
//                     <option value="Rajesthan">{city[0]}</option>
//                 </select>
//             </div>

//         </>
//     )
// }

// export default Changes;

import { useState } from "react";

const Changes = () => {
    const [color, setColor] = useState("blue");
    const [city, setCity] = useState([]);
    
    // Array of states
    const states = ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan"];
    
    // Object mapping states to their cities
    const stateCities = {
        "Uttar Pradesh": ["Banaras", "Prayagraj", "Noida"],
        "Madhya Pradesh": ["Indore", "Ujjain", "Bhopal"],
        "Rajasthan": ["Nimbyra", "Ringas", "Colony"]
    };
    
    const handleChange = () => {
        setColor(color === "blue" ? "Green" : "blue");
    }

    const handleinp = (e) => {
        const selectedState = e.target.value;
        console.log(selectedState);
        
        // Get cities for the selected state
        setCity(stateCities[selectedState] || []);
    }

    return(
        <>
            <h1>Changes</h1>
            <div>
                <h4>{color}</h4>
                <button onClick={handleChange}>Change</button>
            </div>
            <hr />
            <div>
                <select onChange={handleinp} defaultValue="">
                    <option value="" disabled>Select your state</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
                <br />
                <select disabled={city.length === 0}>
                    <option value="">Select your city</option>
                    {city.map((cityName, index) => (
                        <option key={index} value={cityName}>
                            {cityName}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Changes;

// import { useState } from "react";

// const Changes = () => {
//     const [city, setCity] = useState([]);


//     const handleinp = (e) => {
//         console.log(e.target.value);
//         if (e.target.value === "Uttar Pradesh") {
//             setCity(["Banaras", "Prayagraj", "Noida"]);
//         } else if (e.target.value === "Madhya Pradesh") {
//             setCity(["Indore", "Ujjain", "Bhopal"]);
//         } else if (e.target.value === "Rajesthan") {
//             setCity(["Nimbyra", "Ringas", "Colony"]);
//         } else {
//             setCity([]);
//         }
//     }

//     return(
//         <>
//             <h1>Changes</h1>
//             <div>
//                 <h4>{color}</h4>
//                 <button onClick={handleChange}>Change</button>
//             </div>
//             <hr />
//             <div>
//                 <select onChange={handleinp} defaultValue="">
//                     <option value="" disabled>Select your state</option>
//                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                     <option value="Rajesthan">Rajesthan</option>
//                 </select>
//                 <br />
//                 <select disabled={city.length === 0}>
//                     <option value="">Select your city</option>
//                     {city.map((cityName, index) => (
//                         <option key={index} value={cityName}>
//                             {cityName}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </>
//     )
// }

// export default Changes;