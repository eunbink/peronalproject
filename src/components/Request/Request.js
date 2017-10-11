import React, { Component } from 'react';
import './Request.css';
import { Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button, ButtonToolbar } from 'react-bootstrap'
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
        
       </div>
       <div className="pay_form">
       <Form horizontal>
    <FormGroup controlId="formHorizontalInvoice">
      <Col componentClass={ControlLabel} sm={5}>
        Invoice
      </Col>
      <Col sm={5}>
        <FormControl type="email" placeholder="Invoice#" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail2">
      <Col componentClass={ControlLabel} sm={5}>
        Email
      </Col>
      <Col sm={5}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPay">
      <Col componentClass={ControlLabel} sm={11}>
      <StripeCheckout className="pay_button"
          token={this.onToken}
          stripeKey={ stripe.pub_key }
          amount={this.state.paymentAmt}/>
      </Col>
    </FormGroup>
        </Form>
        </div>
        <div>
        <Button className= "quote_button" >GET A QUOTE</Button> 
        </div>
      </div>
    );
  }
}

export default Request;