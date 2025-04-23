import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Suggetion() {
    const [pro, setPro] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("data"));
        setPro(items)
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
          navigate('/product');
          // <div>
          //   {console.log(shop.id)}
          //   </div>
      };

    return ( 
        <>
            <div className="sugg-card"  >
        {pro.map(product => (
          <div key={product.id}  className="card.in"   >
            <img src={product.image} alt="free pic" />
            <h4 style={{display:"flow"}}>{product.name}</h4>
            {/* <h5>Price: Rs {product.price}  </h5> */}
            {/* <h6 className="discount" >5% off</h6> */}
            {/* <h5>Discounted Price: Rs {product.discount} </h5> */}
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
        {/* <span> Hello</span> */}

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
            
        </>
    );
}

export default Suggetion;