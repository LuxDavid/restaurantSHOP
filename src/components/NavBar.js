import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=> {
  return (
    <header id="cabecera">

      <nav id='menu'>
        <ul id='navegation-options'>

        <li className='nav-link'><Link to="/">Inicio</Link></li>
        <li className='nav-link'><Link to="/products">Productos</Link></li>
        <li className='nav-link'><Link to="/cart">Carrito</Link></li>
        
        </ul>
      </nav>
    </header>
  )
}

export default Navbar