import React from 'react'
import './Banner.css';

function Banner({content, bannerImage}) {
  return (
    <div className='banner'>
      <p>{content}</p>
      <img src={bannerImage} alt="" />
    </div>
  )
}

export default Banner