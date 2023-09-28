import React from 'react'

import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg fixed-top nav-menu'>
        <a href='#' className='navbar-brand text-light text-uppercase'><span className='h2 font-weight-bold'>Shoppify</span></a>
        <button className='navbar-toggler nav-button' type='button' data-bs-toggle='collapse' 
        data-bs-target='#myNavbar'>
            <div className='bg-light line1'></div>
            <div className='bg-light line2'></div>
            <div className='bg-light line3'></div>
        </button>
        <div className='collapse navbar-collapse justify-content-end text-uppercase font-weight-bold' id='myNavbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='menu-item' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='menu-item' to='/Shop'>Shop</Link>
                </li>
                <li className='nav-item'>
                    <Link className='menu-item' to='/Services'>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link className='menu-item' to='/About'>About Us</Link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar