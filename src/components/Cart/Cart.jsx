import React from 'react'
import './Cart.css';

import CartImage from '../../assets/cart-image.png';

function Cart() {
  return (
    <div className='cart'>
      <img src={CartImage} alt="" />
      <p>Cart</p>
    </div>
  )
}

export default Cart