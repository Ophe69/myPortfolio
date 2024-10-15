import React from 'react'
import './Services.css'
import vague from '../../assets/vagueBas.svg'
import Services_data from '../../assets/services_data'


const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={vague} alt="vague" />
      </div>
      <div className="services-container">
        {Services_data.map((service, index)=>{
          return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        })}

      </div>
    </div>
  )
}

export default Services;