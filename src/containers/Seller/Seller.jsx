import axios from 'axios';
import React, {Component} from 'react'
import './Seller.css';

export default class Seller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: '',
            itemsDomain: '',
            itemImages: '',
            itemsDetails: '',
            itemPrice: '',
            discountPercent: '',
            availableStock: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.state.itemImages = [this.state.itemImages];
        console.log(this.state);
        axios.post('/item/new', this.state).then(response => {
            console.log(response.data[0].itemsId);
            window.location.href = `/item/${response.data[0].itemsId}`
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {itemName, itemsDomain, itemImages, itemsDetails, itemPrice, discountPercent, availableStock} = this.state;
        return (
            <div className='seller-page'>
              <form onSubmit={this.submitHandler}>
                <h1>Item Details Form</h1>
                <input type="text" name='itemName' placeholder='Item Name' value={itemName} onChange={this.changeHandler} />
                <input type="text" name='itemsDomain' placeholder='Item Domain' value={itemsDomain} onChange={this.changeHandler} />
                <input type="text" name='itemImages' placeholder='Image Url' value={itemImages} onChange={this.changeHandler} />
                <input type="text" name='itemsDetails' placeholder='Item Details' value={itemsDetails} onChange={this.changeHandler} />
                <input type="text" name='itemPrice' placeholder='Item Price' value={itemPrice} onChange={this.changeHandler} />
                <input type="text" name='discountPercent' placeholder='Discount Percent' value={discountPercent} onChange={this.changeHandler} />
                <input type="text" name='availableStock' placeholder='Available Stocks' value={availableStock} onChange={this.changeHandler} />
                <button type='submit'>Sell</button>
              </form>
            </div>
        )
    }
}