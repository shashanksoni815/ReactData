import { useContext } from "react";
import { CartContext } from './Product'

const addCart = useContext(CartContext);

function Shop() {
    const apiData = JSON.parse(localStorage.getItem("data"));

    return ( 
        // <div className="body-card">
        //         {
        //             apiData.map((api) => (
        //                 <div key={api.id == num} className="card-in" >
        //                     <h2>{api.name}</h2>
        //                     <h3>{api.price}</h3>
        //                     <button className="btn" >  Add to cart</button>
        //                 </div>
        //             ))
        //         }
        //     </div>
        hi
    );
}

export default Shop;
