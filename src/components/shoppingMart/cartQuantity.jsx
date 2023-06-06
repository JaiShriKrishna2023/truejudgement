import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const item = { quantity: quantity, name: 'Product' }; // Replace 'Product' with the actual product name or details
    setCartItems([...cartItems, item]);
    setQuantity(1);
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cart;
