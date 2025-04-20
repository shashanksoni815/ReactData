import { useEffect, useState } from "react";
import "../Products/Products.css"

function Products() {
    const [data, setData] = useState([]) 

   useEffect(() => {
        const info = JSON.parse(localStorage.getItem("products"))
        setData(info);
   }, [])

    console.log(data)

    return ( 
        <>
            <div className="main">
        
                {data.map((product) => (
                    <div  key={product.id} className="product-view" >
                        <img src={product.image} alt="pic"  />
                        <h5>{product.title}</h5>
                        <h5>Peice = ${product.price}</h5>
                        
                    </div>
                ))}
            </div>        
        </>
     );
}

export default Products;

 // useEffect(() => {
    //     fetch("https://fakestoreapi.in/api/products", JSON)
    //     .then((response) => response.json() )
    //     .then((json) => {
    //         setData(json.products);
    //     })
    //     .catch((error) => console.error("Fetch error:", error));
    // }, [])