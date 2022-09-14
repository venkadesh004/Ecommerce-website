import React from 'react'
import './Items.css';

function Items({heading, img, special, redirect}) {
  if (special === true) {
    return (
      <a href={redirect}>
        <div className='items-block' style={{'backgroundColor': '#000000'}}>
          <p style={{'color': '#FFFFFF'}}>{heading}</p>
          <img src={img} alt="" />
        </div>
      </a>  
    )
  }
  return (
    <a href={redirect}>
      <div className='items-block'>
        <p>{heading}</p>
        <img src={img} alt="" />
      </div>
    </a>
  )
}

export default Items