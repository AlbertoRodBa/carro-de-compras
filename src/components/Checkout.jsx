import React from 'react';

const Checkout = ({ cartItems, onBack }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <h1 className="mt-1">Resumen de Compra</h1>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h2 className="mt-3">Total: ${total}</h2>
      <button className="btn btn-primary mt-3 mx-2" onClick={onBack}>
        Volver al Carrito
      </button>
      <button className="btn btn-dark mt-3 mx-2" onClick={() => alert('Pago procesado!')}>
        Pagar
      </button>
    </div>
  );
};

export default Checkout;
