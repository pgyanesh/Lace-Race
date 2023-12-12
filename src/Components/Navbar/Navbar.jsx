import React from 'react'
import './Navbar.css'
import vegnonveglogo from '../../Assets/vegnonveglogo.png'
import loginlogo from '../../Assets/loginlogo.png'
const Navbar = () => {
  return (
    <div className='navbar-section'>
      <div className="navbarline-First">
        <div className="navbar-left">
          <img className='vegnonveglogo' src={vegnonveglogo} alt='error'/>
        </div>
        <div className="navbar-right">
           <a href='/login'> <img className='loginlogo' src={loginlogo} alt='error'/></a>
        </div>
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

