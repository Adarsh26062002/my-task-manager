import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return <>

    <nav>Get ready to complete your goals</nav>

    <div className='header'>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/contact">CONTACT</Link>
    <Link to="/user">USER</Link>

    </div>

    </>
}

export default Header;
