// src/components/Product.jsx
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top img-fluid" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
