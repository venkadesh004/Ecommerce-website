import React from 'react'

import { SearchBar, SellerButton, Cart, User } from '../../components';

import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <SearchBar />
      <SellerButton />
      <div className="user-icons">
        <div className="user-icons-cart">
          <Cart />
        </div>
        <User />
      </div>
    </div>
  )
}

export default NavBar