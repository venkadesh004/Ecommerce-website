import React from 'react'
import './Search.css';

import SearchIcon from '../../assets/search-image.png';

function Search() {
  return (
    <div className='search-bar'>
        <input type="text" className='search-bar-input' placeholder='Search for Products, brands and more'/>
        <img src={SearchIcon} alt="" />
    </div>
  )
}

export default Search