import React from 'react'
import './About.css'
import vague from '../../assets/vagueBas.svg'
import home1 from '../../assets/OphéliaLight.svg'

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={vague} className="image-about" alt="blob moi" />
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
          <div className="about-skills">
            <h2>I love working on</h2>
            <div className="about-skill">

            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>4+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About