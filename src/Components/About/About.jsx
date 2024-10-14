import React from 'react'
import './About.css'
import home1 from '../../assets/home1.jpg'

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={home1} className="image-about" alt="image moi" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={home1} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm experienced...</p>
            <p>My passion....</p>
          </div>
          <div className="about-skills"></div>
          <h2>I love working on</h2>
          
        </div>
      </div>
    </div>
  )
}

export default About