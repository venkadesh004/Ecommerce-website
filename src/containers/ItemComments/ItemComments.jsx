import React, { Component } from 'react'
import './ItemComments.css';

import UserDefault from '../../assets/user-default.png';

export default class ItemComments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='comment-box'>
                <div className="top-details">
                    <img src={UserDefault} alt="" />
                    <p>{this.props.username}</p>
                </div>
                <div className="comments">
                    <p>{this.props.comments}</p>
                </div>
            </div>
        )
    }
}