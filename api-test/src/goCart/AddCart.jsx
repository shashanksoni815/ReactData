import { useEffect, useState } from "react";
import Nav from "./Nav";

function ShowCart() {
    const [cartItem, setCartItem] = useState(null); 
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cartItem'));
        setCartItem(item);
    }, []); 
      
    if (!cartItem) return <p>No item in cart.</p>;    

    const removeCart = () => {
        console.log(cartItem.id)
        localStorage.removeItem(cartItem.id)
    }

    return (
        <>
        <Nav />
        <div>
            {/* <h1>Cart</h1> */}
            <div id="product">
                
                <h2>{cartItem.name}</h2>
                <h3>Price: ${cartItem.price}</h3>
                <button className="btn" onClick={() => removeCart()} >Remove Cart</button>
            </div>
        </div> 
        </>
    );
    
}

export default ShowCart;