import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo Ophélia.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={Logo} className="logo" alt="logo"/>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Me contacter</div>

    </div>
  )
}

export default Navbar