import React, { Component } from 'react';
import './Contact.css'
import { Button } from 'react-bootstrap'
import mapboxgl from 'mapbox-gl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import phone from '../../Images/phone icon.png';
import hours from '../../Images/workicon.png';
import location from '../../Images/map icon.png';
import arrow from '../../Images/arrow.png';
import fax from '../../Images/faxicon.png';


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
    this.showContact = this.showContact.bind(this);
    this.send = this.send.bind(this);

  }
  showContact () {
    this.setState({
      show: !this.state.show
    })
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
      center: [-111.728694, 40.311100],
      zoom: 16.8
    });

    map.on('load', () => {
      var marker = new mapboxgl.Marker().setLngLat([-111.72867, 40.31083]).addTo(map);

    });
  }


  render() {

    return (
      <div>
        <div className='contact'>
          <div className="form" >
          <h1>Contact Us</h1>
          
            <input className="input" onChange={(e) => {
              this.setState({
                email: { ...this.state.email, name: e.target.value }
              })
            }} type="text" placeholder="Name" />
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
        
        <img onClick = {this.showContact}className="arrow" src={ arrow }/>
          </div>


          {/* --------Contacts-------- */}
         { this.state.show ? <div className="CT">
          <div className="contactlist">
            <div className="location-container">
              <p className="location-text"><span>
                <img className="locationicon" src={location} /></span> 1349 West 760 North Orem, UT 84057</p>
            </div>

            <div className="hours-container">
              <p className="hours-text"> <span>
                <img className="hoursicon" src={hours} /></span>M-F 9:00am - 5:30pm</p>
            </div>

            <div className="phone-container">
              <p className="phone-text"><span>
                <img className="phoneicon" src={phone} /></span>801-221-2737</p>
            </div>

            <div className="fax-container">
              <p className="fax-text"><span>
                <img className="faxicon" src={ fax } /></span>801-221-2736</p>
            </div>

          </div>
          </div> : null  }

          {/* --------MAP------------- */}
          <div id="map"></div>
          
          <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
        </div>
        
      </div>



    );
  }
}

export default Contact; 