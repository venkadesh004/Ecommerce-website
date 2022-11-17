import React, {Component} from 'react'
import './MainBody.css';

import { Banner, Items } from '../../components';
import GamingPCImage from '../../assets/gaming-pc-image.png';

import axios from "axios";

export default class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      items: {},
      itemLength: 0
    }
  }

  componentDidMount = () => {
    axios.get('/items').then(response => {
      this.setState({
        items: response.data,
        itemLength: response.data.length
      });
    });
  }

  checkIn(category, domain) {
    var flag = 0;
    category.forEach(element => {
      if (element === domain) {
        flag = 1;
      }
    });
    if (flag === 0) {
      return true;
    }
  }

  render() {
    const itemsArray = [];
    const category = [];
    for(var i=0; i<this.state.itemLength; i++) {
      if (this.checkIn(category, this.state.items[i].itemsDomain) === true) {
        var item = <Items heading={this.state.items[i].itemName} img={this.state.items[i].itemImages[0]} special={false} redirect={`/product/${this.state.items[i].itemsDomain}`}/>;
        category.push(this.state.items[i].itemsDomain);
        itemsArray.push(item);
      }
    }
    return (
      <div className='main-body'>
        <div className="main-body-banner">
            <Banner content={"Get All Gaming PC Parts for Most Affordable Price..\nOffer Closes Soon"} bannerImage={GamingPCImage} />
        </div>
        <div className="main-body-items">
            {itemsArray}
        </div>
      </div>
    )
  }
}