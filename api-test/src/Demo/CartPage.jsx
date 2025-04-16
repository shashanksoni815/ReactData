// CartPage.jsx
import { useEffect, useState } from 'react';

function CartPage() {
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('cartItem'));
    setCartItem(item);
  }, []);

  if (!cartItem) return <p>No item in cart.</p>;

  return (
    <div>
      <h1>Cart</h1>
      <h2>{cartItem.name}</h2>
      <p>Price: ${cartItem.price}</p>
    </div>
  );
}

export default CartPage;
