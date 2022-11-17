import React from 'react'
import './SingleItem.css';

import {NavBar, SingleItemBody, Footer} from '../index';
import { useParams } from 'react-router-dom';

function SingleItem() {
    const {id} = useParams();
    console.log(id);
    return (
      <div className='single-item-main-page'>
        <NavBar />
        <SingleItemBody id={id} />
        <Footer />
      </div>
    )
}

export default SingleItem