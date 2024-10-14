import React from 'react'
import './Hero.css'
import PhotoProfil from '../../assets/PhotoProfil.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={PhotoProfil} className="profile-pic" alt="profile picture" />
      <h1><span>Je suis Ophélia,</span> fullstack developpeuse</h1>
      <p>blablabla</p>
      <div className="hero-action">
        <div className="hero-connect">Contactez-moi</div>
        <div className="hero-resume">Mon CV</div>
      </div>
    </div>
  )
}

export default Hero