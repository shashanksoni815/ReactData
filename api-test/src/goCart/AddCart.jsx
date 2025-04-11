import { useContext } from "react";
import CartContext from './Product'

function ShowCart() {
    const addCart = useContext(CartContext);
    // const apiData = JSON.parse(localStorage.getItem("data"));
    console.log(addCart.apiData)
    return ( 
        <>
            <div className="body-card">
                {/* {
                    apiData.map((api) => (
                        <div key={api.id} className="card-in" >
                            <h2>{api.name}</h2>
                            <h3>{api.price}</h3>
                            <button className="btn" >  Add to cart</button>
                        </div>
                    ))
                } */}
            </div>
        </>
    );
}

export default ShowCart;