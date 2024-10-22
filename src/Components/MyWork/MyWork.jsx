import React from 'react'
import './MyWork.css'
import portfolios_data from '../../assets/portfolios_data'
import arrow_icon from '../../assets/icons/arrow-right-solid.svg'

const MyWork = () => {
  return (
    <div className="my-work">
      <div className="mywork-title">
        <h1>My projects</h1>
      </div>
      <div className="mywork-container">
      {portfolios_data.map((work, index)=>{
        return <img key={index} src={work.image} alt="" />

        
      })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} width="50" height="30" color="white" alt="" />
      </div>
    </div>
  )
}

export default MyWork