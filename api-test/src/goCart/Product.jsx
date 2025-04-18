import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav";

function Product() {
  const [pro, setPro] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      const apiData = JSON.parse(localStorage.getItem("data"));
      setPro(apiData)
  }, [])

  const handleAddToCart = (item) => {
      let prevItem = JSON.parse(localStorage.getItem('cartItems')) || []
      
      const inCart = prevItem.some(cartItem => cartItem.id === item.id);
      
      if (inCart) {
        alert("This item is already in the cart.");
        return;
      }
      let newItem = [ ...prevItem , item]
      console.log(newItem.id)
     localStorage.setItem('cartItems', JSON.stringify(newItem))
      navigate('/cart');
      // <div>
      //   {console.log(shop.id)}
      //   </div>
  };
  
  return ( 
    <>
      <Nav />
      {/* <h1 >Products</h1> */}
      <div className="body-card" id="card" >
        {pro.map(product => (
          <div key={product.id}  className="card.in" id="product" >
            <img src={product.image} alt="free pic" id="pro-img" />
          <h2>{product.name}</h2>
          <h3>Price: {product.price}  </h3>
          <h3>Discounted Price: {product.discount} </h3>
          <button className="btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;