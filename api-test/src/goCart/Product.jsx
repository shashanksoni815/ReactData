import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav";
import Footer from "./Footer";

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
      setShowLoginModal(true)
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
            <h3>{product.name}</h3>
            <h5>Price: Rs {product.price}  </h5>
            <h6 className="discount" >5% off</h6>
            <h5>Discounted Price: Rs {product.discount} </h5>
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}

        {showLoginModal && (
        <div className="model-layer" >
          <div className="model-display" >
            <h1>Do you want to continue please login first!!</h1>
            <button className="btn btn-primary" onClick={() => navigate('/login')}>Go to Login</button>
            <button className="btn btn-primary" onClick={() => setShowLoginModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
}

export default Product;