import { createContext, useEffect, useState } from "react";

 export const CartContext = createContext(null); 

function ProductProvider(prop) {
    // const [num, setNum] = useState(0);

    // useEffect(() => {
    //     const apiData = JSON.parse(localStorage.getItem("data"));
    //     console.log(apiData)
    // }, [])

    const apiData = JSON.parse(localStorage.getItem("data"));
    console.log(apiData)

    return ( 
        <CartContext.Provider value={{apiData}} >
            {apiData}
        </CartContext.Provider>
     );
}

export default ProductProvider;