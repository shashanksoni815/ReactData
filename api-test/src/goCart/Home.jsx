// import ShowCart from "./AddCart";
// import { daDK } from "@mui/material/locale";
import datas from "../assets/data.json"
// import Product from "./Product";
import { useEffect } from "react";



function Home() {

    let data = datas
    console.log(data)

    useEffect(() => {

        localStorage.setItem("data", JSON.stringify(data));
      }, []);



    return ( 
        <>
           home
        </>
     );
}

export default Home;