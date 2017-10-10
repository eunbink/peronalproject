import React, { Component } from 'react';
import './Contact.css'
import { Form, FormControl, Button } from 'react-bootstrap'
import mapboxgl from 'mapbox-gl';


class Contact extends Component {

  
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
          <h1>Contact</h1>
          <div className="logos">
            <img className="facebook" src="https://www.shareicon.net/download/2015/09/24/106699_network_512x512.png" />
            <img className="linkedin" src="https://www.shareicon.net/download/2015/09/28/108616_media_512x512.png" />
            <img className="instagram" src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-instagram-outline-stroke-512.png" />
          </div>
          <div>
            <div onClick={this.showMessage} className="message">LEAVE US A MESSEAGE</div>
          </div>
        </div>
        <div className="contact_container">
          
        <Form inline className="contact_form" >
         <div className="input1_container">
          <FormControl className="input1" type="text"/>
         </div>
         <div className="input2_container">
          <FormControl className="input2" type='text'/>
          </div>
         <Button className="submit_button">SUBMIT</Button>
        </Form> 
        </div>
        <div className='place'>
          <div id="map">
          </div>

        </div>

        
       
      </div>

    );
  }
}

export default Contact; 