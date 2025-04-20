import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav";

function Product() {
  const [pro, setPro] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
      const apiData = JSON.parse(localStorage.getItem("data"));
      setPro(apiData)
  }, [])

  const handleAddToCart = (item) => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
      setShowLoginModal(true); // Show modal if not logged in
      return;
    }

      let prevItem = JSON.parse(localStorage.getItem('cartItems')) || []
      
      const inCart = prevItem.some(cartItem => cartItem.id === item.id);
      
      if (inCart) {
        alert("This item is already in the cart.");
        return;
      }
      let newItem = [ ...prevItem , item]
      //console.log(newItem.id)
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
            <h3>Price: Rs {product.price}  </h3>
            <h3 className="discount" >5% off</h3>
            <h3>Discounted Price: Rs {product.discount} </h3>
            <button className="btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}

{showLoginModal && (
        <div className="model-layer" >
          <div className="model-display" >
            <h1>You need to log in first</h1>
            <button className="btn" onClick={() => navigate('/login')}>Go to Login</button>
            <button className="btn" onClick={() => setShowLoginModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      </div>
    </>
  );
}

export default Product;