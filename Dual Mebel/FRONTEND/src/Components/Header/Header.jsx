import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Dual Mebel</Link>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Axtar..." />
        <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        <Link to="/basket">
        <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to="/wishlist">
        <i className="fa-solid fa-heart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
