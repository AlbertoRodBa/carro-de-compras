// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Ajusta la ruta según donde tengas el logo

const Header = () => {
  return (
<header className="header custom-header text-white text-center py-3">
<img src={logo} alt="Logo de la Tienda" className="logo" /> {/* Agrega el logo */}
    </header>
  );
};

export default Header;
