import React from 'react'
import './UserProfile.css';

import { USERDETAILS } from '../userDetails';
import UserImage from '../../assets/user-image.png';

function UserProfile() {
  console.log(USERDETAILS);
  return (
      <div className='user'>
          <img src={UserImage} alt="" />
          <p>{USERDETAILS.username}</p>
      </div>
  )
}

export default UserProfile