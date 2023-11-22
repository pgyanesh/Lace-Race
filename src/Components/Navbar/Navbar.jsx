import React from 'react'
import './Navbar.css'
import vegnonveglogo from '../../Assets/vegnonveglogo.png'
const Navbar = () => {
  return (
    <div className='navbar-section'>
      <div className="navbarline-First">
       <img src={vegnonveglogo} alt='error'/>
      </div>
      <div className="navbarline-Second">
        <a href='/'>FOOTWEAR</a>
        <a href='/'>APPAREL</a>
        <a href='/'>GIRLS</a>
        <a href='/'>BASKETBALL</a>
        <a href='/'>ACCESSORIES</a>
        <a href='/'>ART</a>
      </div>
    </div>
  )
}

export default Navbar

