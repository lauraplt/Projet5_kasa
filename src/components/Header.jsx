import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/a-propos">À propos</Link></li>
          <li><Link to="/logment">Logement</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;