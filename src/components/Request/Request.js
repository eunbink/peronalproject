import React, { Component } from 'react';
import './Request.css';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button, ButtonToolbar } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout';
import stripe from './Stripekey'; 
import axios from 'axios';


class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmt: 2500,
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }
  
  hideModal() {
    this.setState({show: false});
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
        <FormControl placeholder="Invoice #" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail2">
      <Col componentClass={ControlLabel} sm={5}>
        Email
      </Col>
      <Col sm={5}>
        <FormControl placeholder="Email" />
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
        <ButtonToolbar>
            <div className="message_button_container">
        <Button className="message_button" bsStyle="primary" onClick={this.showModal}>
          Get A Quote
        </Button>
        </div>
          <Modal   
          {...this.props}
          
          aria-labelledby="contained-modal-title-lg"
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal2" >
          <Modal.Header className= "modal_header" closeButton>
            <Modal.Title id="contained-modal-title">Quote Form</Modal.Title>
          </Modal.Header>
          <div className="contact_form">
          <Form horizontal className="Quote_Form">
          <Modal.Body>

{/* name */}
    <FormGroup controlId="formHorizontalName" >
      <Col componentClass={ControlLabel} sm={1} className="title_input">
        Name
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Name" />
      </Col>
    </FormGroup>

{/* phonenumber */}
    <FormGroup controlId="formHorizontal" >
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Phone Number
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Phone #" />
      </Col>
    </FormGroup>
{/* email */}
    <FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Email
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Email" />
      </Col>
    </FormGroup>

{/* design type */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
      Design Type 
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Design Type" />
      </Col>
    </FormGroup>

{/* size */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Size
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Size" />
      </Col>
    </FormGroup>

{/* color */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Color
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Color" />
      </Col>
    </FormGroup>

{/* printed shirts - front/back/both */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Sides
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Front/Back/Both (Shirts)" />
      </Col>
    </FormGroup>        

{/* single/double */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Single/Double
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Single/Double" />
      </Col>
    </FormGroup>

{/* how many */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Quantity
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Quantity" />
      </Col>
    </FormGroup>

{/* Due date */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Due Date
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Due Date (Rushed job costs extra)" />
      </Col>
    </FormGroup>

{/* Details */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={1}className="title_input">
        Comments
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Write any details here.." />
      </Col>
    </FormGroup>

   
   
    <FormGroup >
      <Col smOffset={1} sm={4}>
        <Button className="messageSubmitbutton" type="submit">
          SUBMIT
        </Button>
      </Col>
    </FormGroup>
    </Modal.Body>

  </Form>
          </div>
    </Modal>
    </ButtonToolbar>
    </div>
 
      </div>
    );
  }
}



export default Request;