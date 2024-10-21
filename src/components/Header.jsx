import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header custom-header text-white text-center py-3">
      <a href="/" className="logo-link"> {/* Enlace al inicio */}
        <img src={logo} alt="Logo de la Tienda" className="logo" />
      </a>
    </header>
  );
};

export default Header;
