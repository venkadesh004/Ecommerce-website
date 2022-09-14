import React from 'react'
import './UserProfile.css';

import UserImage from '../../assets/user-image.png';

function UserProfile() {
  return (
    <div className='user'>
        <img src={UserImage} alt="" />
        <p>Venkadesh</p>
    </div>
  )
}

export default UserProfile