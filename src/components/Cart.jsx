// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="mt-4">
      <h2>Carrito</h2>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - ${item.price}
            <button className="btn btn-primary btn-sm" onClick={() => removeFromCart(item)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3 className="mt-3">Total: ${total}</h3>
    </div>
  );
};

export default Cart;
