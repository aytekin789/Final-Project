import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li> <Link to="/" >Ana sehife</Link></li>
            <li> <Link to="/products" >Mehsullar</Link></li>
            <li> <Link to="/basket" >Sebet</Link></li>
            <li> <Link to="/contact" >Elaqe</Link></li>
            <li> <Link to="/wishList" >WishList</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar