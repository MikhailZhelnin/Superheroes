import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <h2 className="navbar__title">Superheroes</h2>
          <nav className="navbar__nav">
            <Link className="navbar__item" to="/">
              All superheroes
            </Link>
            <Link className="navbar__item" to="/create">
              Create superhero
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
