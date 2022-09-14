import React from 'react'
import './MainPage.css';

import {NavBar, MainBody, Footer} from '../index';

function MainPage() {
  return (
    <div className='main-page-for-main'>
        <NavBar />
        <MainBody />
        <Footer />
    </div>
  )
}

export default MainPage