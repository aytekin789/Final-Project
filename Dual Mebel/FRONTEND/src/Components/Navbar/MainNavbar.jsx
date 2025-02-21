import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="basket">Basket</Link>
        </li>
        <li>
          <Link to="wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        
      </ul>
    </nav>
  </>
  )
}

export default MainNavbar