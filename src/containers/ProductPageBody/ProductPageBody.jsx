import React, {Component} from 'react'
import './ProductPageBody.css';

import {Banner, Items} from '../../components';
import bannerimage from '../../assets/main-task-1.png';

import axios from "axios";

export default class MainBody extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const itemsArray = [];
    for(var i=0; i<this.state.itemLength; i++) {
      if (this.props.domain === this.state.items[i].itemsDomain) {
        var item = <Items heading={this.state.items[i].itemName} img={this.state.items[i].itemImages[0]} special={false} redirect={`/item/${this.state.items[i].itemsId}`}/>;
        itemsArray.push(item);
      }
    }
    return (
      <div className='main-body'>
        <div className="main-body-banner">
            <Banner content={"Get the latest and powerful processor.."} bannerImage={bannerimage} />
        </div>
        <div className="main-body-items">
            {itemsArray}
        </div>
      </div>
    )
  }
}