import React from 'react'
import './ProductPageBody.css';

import {Banner, Items} from '../../components';
import Image from '../../assets/product.png';
import bannerimage from '../../assets/main-task-1.png';

function ProductPageBody() {
  return (
    <div className='product-page-body'>
        <div className="product-page-banner">
            <Banner content={"Get the latest processors in all brands"} bannerImage={bannerimage} />
        </div>
        <div className="product-page-items">
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
            <Items heading={"Intel i9 - 12th Gen"} img={Image} special={false}  redirect={"/"} />
        </div>
    </div>
  )
}

export default ProductPageBody