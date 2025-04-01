// import { useState, useEffect } from "react";
// import Data from "./Data";

    

// function Home() {
//     const [meal, setMeal] = useState();
    
//     const getImg = async () => {
//         const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php", {method:"GET"});
//         let api = await response.json();
//         // console.log(api);
        
//             // api.meals.map((meal) => {
//             //     console.log(meal);
//             //     return response.json();
//             // })

//             setMeal(api);
//             // console.log(meal)  
//     }
//     const random = () => {
//         getImg()
//     }
//     return ( 
//         <>
//             <h1>Data</h1>
            
//             <button onClick={random}  >Get</button>
           
//             {meal.meals.map((e) => {
//                 console.log(e)
//             })}
//         </>
//      );
// }

// export default Home;

import { useState } from "react";

function Home() {
    const [meal, setMeal] = useState(null); // Initialize state to avoid errors
    
    const getImg = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const api = await response.json();

            if (api.meals) {
                setMeal(api); // Update state correctly
            } else {
                console.error("No meals found");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <h1>Random Meal Generator</h1>
            
            <button onClick={getImg}>Get Random Meal</button>
           
            {/* Conditional Rendering to Avoid Errors */}
            {meal && meal.meals && meal.meals.length > 0 && (
                <div>
                    <h2>{meal.meals[0].strMeal}</h2>
                    <img src={meal.meals[0].strMealThumb} alt={meal.meals[0].strMeal} width="300px" />
                    <p>{meal.meals[0].strInstructions}</p>
                </div>
            )}
        </>
    );
}

export default Home;
