import React, { Component } from 'react';
import './Contact.css'
import { Button } from 'react-bootstrap'
import mapboxgl from 'mapbox-gl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import phone from '../../Images/phone icon.png';
import hours from '../../Images/workicon.png';
import location from '../../Images/map icon.png';
import scrolldown from '../../Images/scrolldown.gif';
import fax from '../../Images/faxicon.png';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import contact from '../../Images/contact.png';
import Busy from '../../Images/Busy.mp4';
import Map from '../Map.js'
import scrollToComponent from 'react-scroll-to-component';
import swal from 'sweetalert';
import colorlogo from '../../Images/colorlogo.png';
import usflag from '../../Images/usflag.png';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showscroll:false,
      showmap: false,
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
    this.disappearScroll = this.disappearScroll.bind(this);
  }
  disappearScroll(){
    this.setState({
      showscroll: !this.state.showscroll
    })
  }
  showMap() {
    this.setState({
      showmap: !this.state.showmap
    });
  }

  scrollMap(val) {
    scrollToComponent(val, {
      align:'bottom',
      duration: 1000,
      offset:1000

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
    axios.post('/api/send_email', body).then(response => {
      swal({
        icon: "success",
        title: "Your Message has been Sent!",
        text: "Thank You"
      });
    });
  }


  render() {
    return (
      <div className="contact-container">
        <video autoPlay loop="true" id="video2">
          <source src={Busy} type="video/mp4" />
        </video>
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
              <Flip x delay={500} duration={1500}><Button onClick={() => { this.send(this.state.email) }} className="messageSubmitbutton" type="submit">
                Send Message
        </Button></Flip>
            </div>


          </div>


          {/* --------Contacts-------- */}


          {/* --------MAP------------- */}


          {this.state.showscroll? null: <div className="showmap">
            <p>View Contact Info</p>
            <img onClick={() => {
              this.showMap(); this.disappearScroll()
            }
            } className="scrolldown" src={scrolldown} />
          </div>}

          {this.state.showmap ? 
          
            <div className="CT">

            <div className="contactlist">


              <div className="contacts1">
                <p className="location-text">
                  <img className="locationicon" src={location} /> 1349 West 760 North Orem, UT 84057</p>
              </div>
              <div className="contacts3">
                <p className="phone-text">
                  <img className="phoneicon" src={phone} />801-221-2737</p>
              </div>
              <div className="contacts2">
                <p className="hours-text">
                  <img className="hoursicon" src={hours} />M-F 9:00am - 5:30pm</p>
              </div>
             
              <div className="contacts4">
                <p className="fax-text"> <img className="faxicon" src={fax} />801-221-2736</p>
              </div>

            </div>
           <Map scrollMap={this.scrollMap} /> </div> 
           
           : null} 
           <div className="ourservice">
          <div className="maintitle">Our Services</div>
          <div className="servicetype">
            <div>
              <p className="servicetitle" >PRINTING</p>
              <p className="servicelist">Ticekts/Brochures</p>
              <p className="servicelist">Clothes</p>
              <p className="servicelist">Backdrop/Banner</p>
              <p className="servicelist">Labels/Stickers</p>
            </div>
            <div>
              <p className="servicetitle" >DESIGNING</p>
              <p className="servicelist">Web Design</p>
              <p className="servicelist">Logo Branding</p>
              <p className="servicelist">Packaging</p>
              <p className="servicelist">Illustration</p>
            </div>
            <div>
              <p className="servicetitle" >CREATING</p>
              <p className="servicelist">Audio/Video Producing</p>
              <p className="servicelist">Book Pusblishing</p>
              <p className="servicelist">Logo Promotion</p>
              <p className="servicelist">Show Displaying</p>
            </div>
            <div>
              <p className="servicetitle" >GRAPHICS</p>
              <p className="servicelist">Logo Graphic</p>
              <p className="servicelist">Car Graphic</p>
              <p className="servicelist">Sign Graphic</p>
              <p className="servicelist">Glass/Window Graphic</p>
            </div>
          </div>
          <div className="copyright-con">
          <div className="copyright">
            <div className="copyright-in">© Copyright 1998-2017 BigFatLogos. All Rights Reserved.</div>
            <div className="copyright-in">Thank you for visiting!</div>
            <div className="copyright-in"><img className="usflag"src={usflag}/>United States</div>
            <div className="copyright-in"><a href={process.env.REACT_APP_LOGIN}><Button className="adminlogin">Admin Login</Button></a></div>
          </div>
        </div>
        </div>
        </div>

      </div>



    );
  }
}

export default Contact; 