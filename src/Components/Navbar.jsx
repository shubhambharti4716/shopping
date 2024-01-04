import React from 'react'
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className='logo'>Shopping Cart</div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/mycart">Cart Page</NavLink></li>
        </ul>
      </div>
  )
}

export default Navbar;