import React, { Component } from 'react';
import './SingleItemBody.css';

import {Image1, Image2} from '../MainBody/images';

import ItemComments from '../ItemComments/ItemComments';

import axios from "axios";

export default class SingleItemBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            itemImages: [],
            itemReview: []
        }
    }

    componentDidMount = () => {
        axios.get(`/item/${this.props.id}`).then(response => {
            console.log(response);
            this.setState({
                item: response.data,
                itemImages: response.data.itemImages,
                itemReview: response.data.itemReview
            });
        });
    }

    render() {
        var itemList = [];
        for(var i=0; i<this.state.itemReview.length; i++) {
            itemList.push(<ItemComments username={this.state.itemReview[i][1]} comments={this.state.itemReview[i][0]} />);
        }
        console.log(itemList);
        console.log(this.props.id);
        var finalrate = parseInt(this.state.item.itemPrice) - (parseInt(this.state.item.discountPercent)/100 * parseInt(this.state.item.itemPrice));
        return (
            <div className='single-item-body-main'>
                <div className='single-item-body'>
                    <div className="col-1">
                        <img src={this.state.itemImages[0]} alt="" />
                    </div>
                    <div className="col-2">
                        <p id='item-name'>{this.state.item.itemName}</p>
                        <p id='description'>{this.state.item.itemsDetails}</p>
                        <p id='other'>Original Price: ${this.state.item.itemPrice}</p>
                        <p id='other'>Discount: {this.state.item.discountPercent}%</p>
                        <p id='other'>Final Rate: ${finalrate}</p>
                        <p id='other'>Stocks Available: {this.state.item.availableStock}</p>
                        <div className='buttons'>
                            <button id='add-to-cart'>Add to Cart</button>
                            <button id='buy-now'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    {itemList}                    
                </div>
            </div>
        )   
    }
}