import axios from 'axios';
import React, {Component} from 'react'
import './LoginPage.css';

import { USERDETAILS } from '../../components/userDetails';

export default class Seller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            phonenumber: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.get(`/${this.state.username}`).then(response => {
            console.log(response);
            if (response == null) {
                alert('Username not found');
            } else {
                USERDETAILS = response.data;
                console.log(USERDETAILS);
                window.location.href = "/";
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {username, phonenumber} = this.state;
        return (
            <div className='login-page'>
              <form onSubmit={this.submitHandler}>
                <h1>Login Page</h1>
                <input type="text" name='username' placeholder='Username' value={username} onChange={this.changeHandler} />
                <input type="text" name='phonenumber' placeholder='Phone Number' value={phonenumber} onChange={this.changeHandler} />
                <button type='submit'>Login</button>
              </form>
            </div>
        )
    }
}