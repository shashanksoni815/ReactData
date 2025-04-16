// ProductsPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    setProducts(data);
  }, []);

  const handleAddToCart = (item) => {
    localStorage.setItem('cartItem', JSON.stringify(item)); // Save selected item
    navigate('/cart'); // Go to cart page
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '1rem' }}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
