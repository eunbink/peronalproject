import React, { Component } from 'react';
import './Contact.css'
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button, ButtonToolbar } from 'react-bootstrap'
import mapboxgl from 'mapbox-gl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';




class Contact extends Component {
 constructor() {
   super ();
   this.state = {
     show: false,
     email: {
       name: "",
       email:"",
      message:""

     }
   
 }
 this.showModal = this.showModal.bind(this);
 this.hideModal = this.hideModal.bind(this);
 this.send = this.send.bind(this);
}

send (email) {
  axios.post ('/api/send_email', {
    data: email //body
  })
}

showModal() {
  this.setState({show: true});
}

hideModal() {
  this.setState({show: false});
}
  
componentDidMount (){
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuZ3AxODMiLCJhIjoiY2o4a25wdnB4MGZjaTJ3bXZrZ3lqanl4ZyJ9.15XvXGwFuUbl5uhPOEW2QA';
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
  })
}

  render() {
    console.log(this.state.email)
    return (
      <div>
        <div className='contact'>
          <h1>Contact Us</h1>
          <div className="logos">
            <img className="facebook" src="https://www.shareicon.net/download/2015/09/24/106699_network_512x512.png" />
            <img className="linkedin" src="https://www.shareicon.net/download/2015/09/28/108616_media_512x512.png" />
            <img className="instagram" src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-instagram-outline-stroke-512.png" />
          </div>
          <ButtonToolbar>
            <div className="message_button_container">
        <Button className="message_button" bsStyle="primary" onClick={this.showModal}>
          Leave us a Message
        </Button>
        </div>
          <Modal   
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal-contact" >
          <Modal.Header className= "modal_header" closeButton>
            <Modal.Title id="contained-modal-title">CONTACT US</Modal.Title>
          </Modal.Header>
          <div className="contact_form">
          <Form horizontal className>
          <Modal.Body>
    <FormGroup controlId="formHorizontalName" >
      <Col componentClass={ControlLabel} sm={1} >
        <div className="Contact_input_title">Name</div>
      </Col>
      <Col sm={10}>
        <FormControl onChange={(e)=>{this.setState({
          email:{...this.state.email, name:e.target.value}
          })}} type="email" placeholder="Name" />
      </Col> 
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={1} >
        <div className="Contact_input_title">Email </div>
      </Col>
      <Col sm={10}>
        <FormControl onChange={(e)=>{this.setState({
          email:{...this.state.email, email:e.target.value}
          })}} type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalMessage">
      <Col componentClass={ControlLabel} sm={1} >
        <div className="Contact_input_title_message">Message</div>
      </Col>
      <Col sm={10}>
        <FormControl onChange={(e)=>{this.setState({
          email:{...this.state.email, message:e.target.value}
          })}} type="message" placeholder="Message" />
      </Col>
    </FormGroup>
    
   
    <FormGroup >
      <Col smOffset={1} sm={4}>
        <Button onClick= {()=> this.send(this.state.email)} className="messageSubmitbutton" type="submit">
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
        <div id="map">
          
          </div> 
          <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
        </div>
       
        
       
  
    );
  }
}

export default Contact; 