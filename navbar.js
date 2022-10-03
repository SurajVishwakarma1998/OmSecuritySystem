import React from 'react';


const Navbar = () => {
  return (
   <div className='Navbar'>
    <div className='logo-btn'>
    <img src="./images/Om Security System-page-0.png" className="logo" alt='...' /> 
    <span className='Nav-head'>OM Security System</span>
   
    </div>
    <div className='nav-item'>
        <a className='nav-link' href="/" >Home</a>
        <a className='nav-link' href="/about">About</a>
        <a className='nav-link' href="/service">Service</a>
        <a className='nav-link' href="/contact">Contact</a>
    </div>
   </div>
  )
}

export default Navbar