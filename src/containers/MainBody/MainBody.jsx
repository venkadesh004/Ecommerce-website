import React from 'react'
import './MainBody.css';

import { Banner, Items } from '../../components';
import { Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12 } from './images';
import GamingPCImage from '../../assets/gaming-pc-image.png';

function MainBody() {
  return (
    <div className='main-body'>
        <div className="main-body-banner">
            <Banner content={"Get All Gaming PC Parts for Most Affordable Price..\nOffer Closes Soon"} bannerImage={GamingPCImage} />
        </div>
        <div className="main-body-items">
            <Items heading={"Get the latest processors in all brands"} img={Image1} special={false} redirect={"/product"}/>
            <Items heading={"Motherboards"} img={Image2} special={false} redirect={"/product"} />
            <Items heading={"Graphics Card"} img={Image3} special={false} redirect={"/product"} />
            <Items heading={"RAMs"} img={Image4} special={false} redirect={"/product"} />
            <Items heading={"Coolers"} img={Image5} special={false} redirect={"/product"} />
            <Items heading={"Liquid Coolers"} img={Image6} special={false} redirect={"/product"} />
            <Items heading={"Storage Devices"} img={Image7} special={false} redirect={"/product"} />
            <Items heading={"Mechanical Keyboard"} img={Image8} special={false} redirect={"/product"} />
            <Items heading={"Gaming Mouse"} img={Image9} special={false} redirect={"/product"} />
            <Items heading={"RGB Speakers"} img={Image10} special={false} redirect={"/product"} />
            <Items heading={"Laptops"} img={Image11} special={false} redirect={"/product"} />
            <Items heading={"Latest Mobiles"} img={Image12} special={true} redirect={"/product"}/>
        </div>
    </div>
  )
}

export default MainBody