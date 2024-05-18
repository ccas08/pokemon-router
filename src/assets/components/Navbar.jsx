import React from 'react';
import '../css/navbar.css';
import foto from '../img/logo.jpg'

import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={foto} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pokemones" activeClassName="active">Pokemones</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



