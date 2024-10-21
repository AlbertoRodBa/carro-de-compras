import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header'; // Importa el Header
import mochila from './assets/mochila.avif'; // Importa la imagen de la mochila
import pantalon from './assets/pantalon.jpg'; // Importa la imagen del pantalón
import poleron from './assets/poleron.jpg'; // Importa la imagen del polerón

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false); // Nuevo estado para la página de pago

  const products = [
    {
      name: 'Mochila Adicolor',
      price: 50000,
      image: mochila // Referencia a la imagen local de la mochila
    },
    {
      name: 'Pantalón Nike',
      price: 40000,
      image: pantalon // Referencia a la imagen local del pantalón
    },
    {
      name: 'Polerón Reebok',
      price: 30000,
      image: poleron // Referencia a la imagen local del polerón
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
          <button className="btn btn-dark mt-3 mb-5" onClick={goToCheckout} disabled={cart.length === 0}>
            Ir a Pagar
          </button>
        </>
      )}
    </div>
  );
};

export default App;
