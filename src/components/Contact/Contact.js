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
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import contact from '../../Images/contact.png';
import multiple from '../../Images/multiple.mp4';
import Map from '../Map.js'
import scrollToComponent from 'react-scroll-to-component';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showmap:false,
      show: false,
      email: {
        name: "",
        email: "",
        message: ""
      }
    }
    this.send = this.send.bind(this);
    this.showContact = this.showContact.bind(this);
    this.showMap = this.showMap.bind(this);
    this.scrollMap = this.scrollMap.bind(this);
    
    
  }

  showMap() {
    this.setState({
      showmap: !this.state.showmap
    });
  }

  scrollMap(val){
    scrollToComponent(val,{
      align:'bottom'
    })
    
  }
  showContact() {
    this.setState({
      show: !this.state.show
    });
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


  render() {
    return (
      <div className="contact-container">
        <video autoPlay loop="true" id="video3">
          <source src={multiple} type="video/mp4" />
        </video>
        <div className='contact'>
          <div className="form" >
            <h1>Contact Us</h1>
            <img onClick={this.showContact} className="contactbook" src={contact} />

            {/* --------Contacts-------- */}


            <div className="CT">

              {this.state.show ? <Fade top duration={2000}> <div className="contactlist">


                <div className="col">
                  <p className="location-text">
                    <img className="locationicon" src={location} /> 1349 West 760 North Orem, UT 84057</p>
                </div>
                <div className="col">
                  <p className="hours-text">
                    <img className="hoursicon" src={hours} />M-F 9:00am - 5:30pm</p>
                </div>
                <div className="third">
                  <p className="phone-text">
                    <img className="phoneicon" src={phone} />801-221-2737</p>
                </div>
                <div className="last">
                  <p className="fax-text"> <img className="faxicon" src={fax} />801-221-2736</p>
                </div>

              </div></Fade> : null}
            </div>


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
              <Flip x delay={500} duration={2000}><Button onClick={() => { this.send(this.state.email) }} className="messageSubmitbutton" type="submit">
                Send Message
        </Button></Flip>
            </div>


          </div>



          {/* --------MAP------------- */}


          <div className="showmap">
            <p>View Map</p>
            <img onClick= {()=>{
              this.showMap()

              }
                } className="arrow" src={arrow} />
          </div>

        {this.state.showmap ? <Map scrollMap={this.scrollMap}/>: null}


          <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
        </div>

      </div>
  


    );
  }
}

export default Contact; 