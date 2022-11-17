import React from 'react'
import { useParams } from 'react-router-dom';

import { SearchBar, SellerButton, Cart, User } from '../../components';

import './NavBar.css';

function NavBar() {
  const {id} = useParams();
  return (
    <div className='navbar'>
      <SearchBar />
      <SellerButton />
      <div className="user-icons">
        <div className="user-icons-cart">
          <Cart />
        </div>
        <User id={id} />
      </div>
    </div>
  )
}

export default NavBar