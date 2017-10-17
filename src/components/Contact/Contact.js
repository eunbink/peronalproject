import React, { Component } from 'react';
import './Contact.css'
import { Button } from 'react-bootstrap'
import mapboxgl from 'mapbox-gl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import phone from '../../Images/phoneIcon.png';
// import hours from '../../Images/work-icon.png';
// import location from '../../Images/placeicon.png'; 



class Contact extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      email: {
        name: "",
        email: "",
        message: ""
      }
    }
    this.send = this.send.bind(this);

  }

  send() {
    const body = {
      message: this.state.email.message,
      email: this.state.email.email,
      name: this.state.email.name,
      to: "kangeb1992@gmail.com",
      subject: "Message"
    }
    axios.post('/api/send_email', body)
  }


  componentDidMount() {



    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuZ3AxODMiLCJhIjoiY2o4a25wdnB4MGZjaTJ3bXZrZ3lqanl4ZyJ9.15XvXGwFuUbl5uhPOEW2QA';
    var map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/kangp183/cj8n92kxw7j0u2rpqpr3iy7pu', 
        center: [-111.728537, 40.310701], 
        zoom: 17 
    });
    
    map.on('load', () => {
      var marker = new mapboxgl.Marker().setLngLat([-111.72867, 40.31081]).addTo(map);
      
    });
  }


  render() {

    return (
      <div>
        <div className='contact'>
          
          <h1>Contact Us</h1>

          <div className="form" >
            <input className="input" onChange={(e) => {
              this.setState({
                email: { ...this.state.email, name: e.target.value }
              })
            }} type="text" placeholder="Name" /></div>
          <div>
            <input className="input" onChange={(e) => {
              this.setState({
                email: { ...this.state.email, email: e.target.value }
              })
            }} type="email" placeholder="Email" /></div>
          <div>
            <input className="messageinput" onChange={(e) => {
              this.setState({
                email: { ...this.state.email, message: e.target.value }
              })
            }} type="text" placeholder="Message" /></div>
          <div>
            <Button onClick={() => { this.send(this.state.email) }} className="messageSubmitbutton" type="submit">
              Send Message
        </Button></div>
      {/* --------Contacts-------- */}
        <div className="contactlist">
            {/* <img className="locationicon"src={ location }/>
            <img className="phoneicon" src={ phone }/>
            <img className="hoursicon" src={ hours }/> */}
        </div> 



      {/* --------MAP------------- */}
          <div id="map"></div>
          <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
        </div>

      </div>



    );
  }
}

export default Contact; 