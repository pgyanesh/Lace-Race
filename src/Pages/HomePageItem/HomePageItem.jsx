import React from 'react'
import './HomePageItem.css'
const HomePageItem = (props) => {
  return (
    <div className='homePageItem-container'>
        <img className='homeItem-img' src={props.image} alt='error'/>
        <div className="homePageItem-content">
          <p>{props.brand}</p>
          <h4>{props.name}</h4>
          <p>Rs {props.price}</p>
        </div>
      
    </div>
  )
}

export default HomePageItem
