import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Product() {
    const [pro, setPro] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const apiData = JSON.parse(localStorage.getItem("data"));
        setPro(apiData)
    }, [])

    const handleAddToCart = (item) => {
        localStorage.setItem('cartItem', JSON.stringify(item)); // Save selected item
        navigate('/cart');
      };

    return ( 
        <>
        <h1>Products</h1>
        <div className="body-card" >
        {pro.map(product => (
            <div key={product.id}  className="card.in" >
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <button className="btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
        </>
     );
}

export default Product;