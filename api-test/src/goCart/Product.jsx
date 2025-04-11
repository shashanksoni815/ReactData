import { createContext, useEffect, useState } from "react";

 export const CartContext = createContext(null); 

function ProductProvider(prop) {

    // useEffect(() => {
    //     const apiData = JSON.parse(localStorage.getItem("data"));
    //     console.log(apiData)
    // }, [])

    const apiData = JSON.parse(localStorage.getItem("data"));
    // console.log(apiData)

    return ( 
        <CartContext.Provider value={apiData} >
            {prop.children}
        </CartContext.Provider>
     );
}

export default ProductProvider;