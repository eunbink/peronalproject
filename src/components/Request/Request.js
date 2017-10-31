import React, { Component } from 'react';
import './Request.css';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout';
import stripe from './Stripekey'; 
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Busy from '../../Images/Busy.mp4';
import swal from 'sweetalert';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      paymentAmt: 1500,
      show: false,
      quote: {
        name:"",
        phoneNumber:"",
        email:"",
        designType:"",
        size:"",
        color:"",
        sides:"",
        singleDouble:"",
        quantity:"",
        dueDate:"",
        comments:"",
        image:'',
        invoice:''
      }
    }
    this.checkEmailInvoice = this.checkEmailInvoice.bind(this);
    this.changeIsChecked = this.changeIsChecked.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.send = this.send.bind(this);
    this.close = this.close.bind(this);
    this.submitQuotesToDatabase = this.submitQuotesToDatabase.bind(this);
  }
  
  changeIsChecked (){
    this.setState({
      isChecked : !this.state.isChecked
    })
    console.log('change is checked');
  }

  checkEmailInvoice () {
    axios.get(`/api/quote?email=${this.state.quote.email}&invoice=${this.state.quote.invoice}`).then(response => {
      console.log(response);
      if (response.data.length > 0 ){
        this.changeIsChecked();
      }
        })
    
    console.log('check email invoice is done');
  }

  submitQuotesToDatabase () {
    
    const body = {
      name: this.state.quote.name,
      email: this.state.quote.email,
      phonenumber:this.state.quote.phoneNumber,
      designtype:this.state.quote.designType,
      size:this.state.quote.size,
      color:this.state.quote.color,
      sides:this.state.quote.sides,
      sides2:this.state.quote.singleDouble,
      duedate:this.state.quote.dueDate,
      quantity:this.state.quote.quantity,
      comments:this.state.quote.comments,
      image:this.state.quote.image,
      
    }
    axios.post('api/quote/addquote', body)
  }

  send () {
    const body = {
      designType:this.state.quote.designType,
      size:this.state.quote.size,
      color:this.state.quote.color,
      sides:this.state.quote.sides,
      singleDouble:this.state.quote.singleDouble,
      dueDate:this.state.quote.dueDate,
      phoneNumber:this.state.quote.phoneNumber,
      quantity:this.state.quote.quantity,
      comments:this.state.quote.comments,
      email: this.state.quote.email,
      name: this.state.quote.name,
      image: this.state.quote.image,
      to: "kangeb1992@gmail.com",
      subject: "Request Quote"
    }
    axios.post ('/api/send_quote', body ).then(response => {
      swal({
        icon: "success",
        title: "Your Quote has been Submitted!",
        text:"Thank You"
      });
    })
  }

  close () {
    this.setState({ show: false});
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
      console.log(response)
      swal({
        icon: "success",
        title: "Payment has been Submitted!",
        text:"Thank You" 
      });
    }).catch(err=>{console.log(err)});
  }
  render() {

console.log(this.state)
    return (
      <div className='request_container'>
         <video autoPlay loop="true" id="video2">
         <source src={Busy} type="video/mp4"/>
         </video>
     


      <div className="horistring"></div>
      <div className="string">
      <div className="verstring1"></div>
      <div className="verstring2"></div>
      </div>
         {     /* get a quote form */   }
      <div>
  
        <ButtonToolbar>
            <div className="message_button_container">
            <Button className="quote_button" onClick={this.showModal}>
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
    <FormGroup controlId="formHorizontal" >
      <Col componentClass={ControlLabel} sm={2} className="title_input">
        Name
      </Col>
      <Col sm={8}>
        <FormControl onChange={(e)=>{this.setState({
          quote:{...this.state.quote, name:e.target.value}
          })}} type="text" placeholder="Name" />
      </Col>
    </FormGroup>

{/* phonenumber */}
    <FormGroup controlId="formHorizontal" >
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Phone Number
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, phoneNumber:e.target.value}
          })}} type="tel" placeholder="Phone #" />
      </Col>
    </FormGroup>
{/* email */}
    <FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Email
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, email:e.target.value}
          })}} type="email" placeholder="Email" />
      </Col>
    </FormGroup>

{/* design type */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
      Design Type 
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, designType:e.target.value}
          })}} type="text" placeholder="T-shirts/Signs/flyers/Posters/Banner/Booklets/Logo" />
      </Col>
    </FormGroup>

{/* size */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Size
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, size:e.target.value}
          })}} type="text" placeholder="Size" />
      </Col>
    </FormGroup>

{/* color */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Color
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, color:e.target.value}
          })}} type="text" placeholder="Color" />
      </Col>
    </FormGroup>

{/* printed shirts - front/back/both */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Sides
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, sides:e.target.value}
          })}} type="text"  placeholder="Front/Back/Both (Shirts)" />
      </Col>
    </FormGroup>        

{/* single/double */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Single/Double
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, singleDouble:e.target.value}
          })}} type="text" placeholder="Single/Double" />
      </Col>
    </FormGroup>

{/* how many */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Quantity
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, quantitiy:e.target.value}
          })}} type="number" placeholder="Quantity" />
      </Col>
    </FormGroup>

{/* Due date */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Due Date
      </Col>
      <Col sm={8}>
        <FormControl  onChange={(e)=>{this.setState({
          quote:{...this.state.quote, dueDate:e.target.value}
          })}} type="date" placeholder="Due Date (Rushed job costs extra)" />
      </Col>
    </FormGroup>

{/* Comments */}
<FormGroup controlId="formHorizontal">
      <Col componentClass={ControlLabel} sm={2}className="title_input">
        Comments
      </Col>
      <Col sm={8}>
        <FormControl  className="comments" onChange={(e)=>{this.setState({
          quote:{...this.state.quote, comments:e.target.value}
          })}} type="text" placeholder="Write any comments here.." />
      </Col>
    </FormGroup>

   {/* image */}
   <FormGroup controlId="formHorizontal">
    <Col componentClass={ControlLabel} sm={2}className="title_input">
        Image
      </Col>
      <Col sm={8}>
      <FormControl type="file" id="fileInput" onChange={(e)=>{
        this.setState({
          quote:{...this.state.quote, image:e.target.value}}
          )}
          }/>
      </Col> 
   </FormGroup>
   
    <FormGroup >
      <Col smOffset={1} sm={4}>
        <Button onClick = {()=>{this.send(this.state.email); this.close(); this.submitQuotesToDatabase()}} className="requestsubmit" type="submit">
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


       {        /* paycard form */       }


    <div className="payform_container"> 
      <div className="pay">
      <div className="circle">
      <div className="circle1"></div>
      <div className="circle2"></div>
      </div>

       <div className="pay_form">
       <Form horizontal>
    <FormGroup controlId="formHorizontalEmail2">
      
      
      <FormControl  className="input" onChange={(e) => {
              this.setState({
                quote: { ...this.state.quote, email: e.target.value }
              })
            }}placeholder="Email" />
     
    </FormGroup>
   
    <FormGroup controlId="formHorizontalInvoice">
     
      
        <FormControl  className="input" onChange={(e) => {
              this.setState({
                quote: { ...this.state.quote, invoice: e.target.value }
              })
            }}placeholder="Invoice #" value={this.state.quote.invoice}/>
      
    </FormGroup>
    <FormGroup onSubmit={e=>{e.preventDefault()}} className="pay" >     
   
    </FormGroup>
  
        </Form>
         { this.state.isChecked ? <Zoom>
     <StripeCheckout className="pay_button"
          token={this.onToken}
          stripeKey={ stripe.pub_key }
          amount={this.state.paymentAmt}
          /></Zoom>:<Button className="check_button" onClick={this.checkEmailInvoice}>Proceed to Payment</Button> }
        </div>
        </div>
       </div>
       <a href={process.env.REACT_APP_LOGIN}><Button className="Admin_button" >ADMIN LOGIN</Button></a>
      </div>
    );
  }
}

// this.checkEmailInvoice(this.state.email, this.state.invoice)


export default Request;