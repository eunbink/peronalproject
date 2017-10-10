import React, { Component } from 'react';
import './Contact.css'
import { Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button, ButtonToolbar } from 'react-bootstrap'
import mapboxgl from 'mapbox-gl';




class Contact extends Component {
 constructor() {
   super ();
   this.state = {
     show: false
   
 }

}
  
componentDidMount (){
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuZ3AxODMiLCJhIjoiY2o4a25wdnB4MGZjaTJ3bXZrZ3lqanl4ZyJ9.15XvXGwFuUbl5uhPOEW2QA';
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
  })
}


  render() {
    return (
      <div>
        <div className='contact'>
          <h1>Contact Us</h1>
          <div className="logos">
            <img className="facebook" src="https://www.shareicon.net/download/2015/09/24/106699_network_512x512.png" />
            <img className="linkedin" src="https://www.shareicon.net/download/2015/09/28/108616_media_512x512.png" />
            <img className="instagram" src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-instagram-outline-stroke-512.png" />
          </div>
          <div>
            <div className="message_button">LEAVE US A MESSEAGE</div>
          </div>
          
          <div className="contact_form">
          <Form horizontal>
    <FormGroup controlId="formHorizontalName">
      <Col componentClass={ControlLabel} sm={2}>
        Name
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalMessage">
      <Col componentClass={ControlLabel} sm={2}>
        Message
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Message" />
      </Col>
    </FormGroup>


    <FormGroup >
      <Col smOffset={2} sm={10}>
        <Button className="message_button" type="submit">
          SUBMIT
        </Button>
      </Col>
    </FormGroup>
  </Form>
          </div>
        </div>

        <div id="map">
          </div> 
        </div>

        
       
  
    );
  }
}

export default Contact; 