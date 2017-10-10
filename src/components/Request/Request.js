import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Request.css';
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './Stripekey'; 
import axios from 'axios';



class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmt: 2500
    }
  }
  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('/api/payment', { token, amount: this.state.paymentAmt } ).then(response => {
      alert('Payment has been completed')
    });
  }
  render() {
    return (
      <div className='request_container'>
        <h1>Request</h1>
       <div className="input_container"> 
         <div className="invoice_input"><input className="invoice" placeholder="Invoice#"/></div>
         <div classNAme="email_input"><input className="email" placeholder="Email"/></div>
         <Button className= "quote_button" >GET A QUOTE</Button> 
       </div>
        <StripeCheckout
          token={this.onToken}
          stripeKey={ stripe.pub_key }
          amount={this.state.paymentAmt}
        />
      </div>
    );
  }
}

export default Request;