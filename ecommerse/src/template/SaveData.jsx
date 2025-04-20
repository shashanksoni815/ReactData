import { useEffect } from "react";
import products from "../assets/JsonFile/product.json"

function SaveData() {

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [])

    return ( 
        <>
            data Save
        </>
     );
}

export default SaveData;