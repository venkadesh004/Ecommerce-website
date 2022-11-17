import React from 'react'
import './Seller.css';

const sellerWindow = (e) => {
  window.location.href = '/seller';
}

function Seller() {
  return (
    <div className='seller-button'>
        <button onClick={sellerWindow}><p>Become a Seller</p></button>
    </div>
  )
}

export default Seller