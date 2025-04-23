import { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function ShowCart() {
    const [cartItem, setCartItem] = useState(null); 
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cartItems')) ;
        setCartItem(item);

        const totalPrice = item.reduce((a, b) => a + b.price, 0);
        setTotal(totalPrice);

        const disPrice = item.reduce((a, b) => a + b.discount, 0);
        setDiscount(disPrice);
        
    }, [] ); 
      
    if (!cartItem) return <p>No item in cart.</p>;    

    const removeCart = ( itemId ) => {
        // let carts = JSON.parse(localStorage.getItem('cartItems')) || [];
        const delCart = cartItem.filter(cart => cart.id !== itemId)
        setCartItem(delCart)
        localStorage.setItem('cartItems', JSON.stringify(delCart))

        const item = JSON.parse(localStorage.getItem('cartItems')) ;
        setCartItem(item);

        const totalPrice = item.reduce((a, b) => a + b.price, 0);
        setTotal(totalPrice);

        const disPrice = item.reduce((a, b) => a + b.discount, 0);
        setDiscount(disPrice);
    }

    return (
        <>
        <Nav />
        <div id="card">
            { cartItem.map(items => (
                    <div key={items.id} id="product" >
                        {/* {setCount = count+1  } */}
                        <img src={items.image} alt="im" id="pro-img" />
                        <h3>{items.name}</h3>
                        <h5>Price: Rs {items.price}</h5>
                        <h6 className="discount" >5% off</h6>
                        <h5>Discounted Price: Rs {items.discount}</h5>
                        <button className="btn btn-primary" onClick={() => removeCart(items.id)}>Remove Cart</button>
                        {/* {console.log(count)} */}

                    </div>
                    
                ))
            }
        </div> 
        <div>
            <h1>Total Price : Rs {total}</h1>
            <h1>Discounted Price : Rs {discount}</h1>
        </div>
        <Footer />
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
