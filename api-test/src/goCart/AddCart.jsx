import { useEffect, useState } from "react";
import Nav from "./Nav";

function ShowCart() {
    const [cartItem, setCartItem] = useState(null); 
    const [count, setCount] = useState(0);

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cartItems')) ;
        setCartItem(item);
    }, []); 
      
    if (!cartItem) return <p>No item in cart.</p>;    

    const removeCart = ( itemId ) => {
        // let carts = JSON.parse(localStorage.getItem('cartItems')) || [];
        const delCart = cartItem.filter(cart => cart.id !== itemId)
        setCartItem(delCart)
        localStorage.setItem('cartItems', JSON.stringify(delCart))
    }

    return (
        <>
        <Nav />
        <div id="card">
            { cartItem.map(items => (
                    <div key={items.id} id="product" >
                        {/* {setCount = count+1  } */}
                        <img src={items.image} alt="im" id="pro-img" />
                        <h2>{items.name}</h2>
                        <h3>Price: {items.price}</h3>
                        <h3>Discounted Price: {items.discount}</h3>
                        <button className="btn" onClick={() => removeCart(items.id)}>Remove Cart</button>
                        {/* {console.log(count)} */}
                    </div>
                    
                ))
            }
        </div> 
        </>
    );
    
}

export default ShowCart;



{/* <h2>{cartItem.name}</h2>
<h3>Price: ${cartItem.price}</h3>
<button className="btn" onClick={() => removeCart()} >Remove Cart</button> */}

// {cartItems.length === 0 ? (
//     <p>Your cart is empty.</p>
//   ) : (
//     cartItems.map((item, index) => (
//       <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
//         <h2>{item.name}</h2>
//         <p>Price: ${item.price}</p>
//       </div>
//     ))
//   )}
