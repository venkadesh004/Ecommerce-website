import React from 'react'
import './SellerMain.css';

import {NavBar, Seller, Footer} from '../index';

function SellerMain() {
  return (
    <div className='seller-main-page'>
        <NavBar />
        <Seller />
        <Footer />
    </div>
  )
}

export default SellerMain
