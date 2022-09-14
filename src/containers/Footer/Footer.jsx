import React from 'react'
import './Footer.css';

import LocationImage from '../../assets/location-image.png';
import CallImage from '../../assets/phone-image.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-1'>
            <div className='footer-1-1'>
                <div className='footer-1-1-1'>
                    <img src={LocationImage} alt="" />
                    <p>Computer Tech Products<br/>Thiagarajar College Of Engineering<br/>Madurai</p>
                </div>
                <div className='footer-1-1-2'>
                    <img src={CallImage} alt="" />
                    <p>1234567890</p>
                </div>
            </div>
            <div className='footer-1-2'>
                <li><h6>Make Money With Us</h6></li>
                <li><a href="">Sell your Products</a></li>
                <li><a href="">Advertisement</a></li>
                <li><a href="">Become an Affliate</a></li>
                <li><a href="">Invest</a></li>
            </div>
            <div className='footer-1-3'>
                <li><h6>Connect With Us</h6></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Mail</a></li>
                <li><a href="">Twitter</a></li>
            </div>
            <div className='footer-1-4'>
                <li><h6>Help</h6></li>
                <li><a href="">How to Login</a></li>
                <li><a href="">How to Sell Products</a></li>
                <li><a href="">How to change Phone Number</a></li>
                <li><a href="">How to check OTP</a></li>
                <li><a href="">Online Delivery</a></li>
            </div>
            <div className='footer-1-5'>
                <li><h6>Policy</h6></li>
                <li><a href="">Return Policy</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Sellers</a></li>
                <li><a href="">Security</a></li>
                <li><a href="">Sitemap</a></li>
            </div>
        </div>
        <div className='footer-2'>
            © Copy rights, Computer Tech Products
        </div>
    </div>
  )
}

export default Footer
