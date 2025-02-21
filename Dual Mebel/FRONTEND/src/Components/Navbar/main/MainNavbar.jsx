import React from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"

const MainNavbar = () => {
  return (
    <>
    <div className='header'>
    <div className="logo">
        <Link to="/"><h1>Dual Mebel</h1></Link>
      </div>
      <div className="navbar">
      <nav >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
      <div className="search-icons">
        <input type="text" placeholder="Axtar..." />
        <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        <Link to="/basket"><i className="fa-solid fa-cart-shopping"></i></Link>
        <Link to="/wishlist"><i className="fa-solid fa-heart"></i></Link>
      </div>
    </div>
  </>
  )
}

export default MainNavbar