// src/App.jsx
import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header'; // Importa el Header

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false); // Nuevo estado para la página de pago

  const products = [
    {
      name: 'Mochila Adicolor',
      price: 50000,
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/abe3a78ccfe34bacb6d0ad5600ee3f3a_9366/Mochila_Adicolor_Negro_H35596_01_standard.jpg'
    },
    {
      name: 'Zapatillas Nike',
      price: 70000,
      image: 'https://nikeclprod.vtexassets.com/arquivos/ids/982151/FQ4330_063_A_PREM.jpg?v=638479384704230000'
    },
    {
      name: 'Polerón Reebok',
      price: 30000,
      image: 'https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dw6737d409/images/original/pim/936804003/936804003_1.jpg?sw=1000&sh=1000'
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item !== productToRemove)
    );
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const goBackToCart = () => {
    setIsCheckout(false);
  };

  return (
    <div className="container">
      <Header /> {/* Aquí se añade el Header */}
      <h1 className="mt-4 text-center">Ropa Deportiva</h1>
      {isCheckout ? (
        <Checkout cartItems={cart} onBack={goBackToCart} />
      ) : (
        <>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <Product product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
          <Cart cartItems={cart} removeFromCart={removeFromCart} />
          <button className="btn btn-success mt-3" onClick={goToCheckout} disabled={cart.length === 0}>
            Ir a Pagar
          </button>
        </>
      )}
    </div>
  );
};

export default App;
