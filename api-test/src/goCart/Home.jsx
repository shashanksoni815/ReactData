// import ShowCart from "./AddCart";
// import { daDK } from "@mui/material/locale";
import datas from "../assets/data.json"
// import Product from "./Product";
import { useEffect } from "react";
import Nav from "./Nav";
import hero from "../assets/images/image.png"
import hero2 from "../assets/images/img2.png"
import hero3 from "../assets/images/hero3.png"
import Acc from "./Acc";
import Suggetion from "./Suggetion";
import Footer from "./Footer";



function Home() {

    let data = datas
    console.log(data)

    useEffect(() => {

        localStorage.setItem("data", JSON.stringify(data));
      }, []);



    return ( 
        <>
          <Nav />
           <div className="hero">
            <img  src={hero3} alt="hero" />
           </div>
          <Acc />
          <Suggetion />
          <Footer />
        </>
     );
}

export default Home;