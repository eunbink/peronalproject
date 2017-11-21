import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Typist from 'react-typist';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import traffic from '../../Images/traffic.mp4';



class Home extends Component {
  
  
  render() {
    return (
      <div className="home_Container">
       <video autoPlay loop="true" id="video">
         <source src={ traffic } type="video/mp4"/>
         </video>
       <div className="letter">
       <Typist 
          className="home_quote"
          avgTypingSpeed={40}
          startDelay={500}
          onTypingDone={this.onHeaderTyped}> 
          Fulfilling Creative Jobs from Ideas to Delivery.
          </Typist>
          <a href={process.env.REACT_APP_LOGIN}><Button className="Admin_button" >ADMIN LOGIN</Button></a>
        
        <Fade x duration={2000}><NavLink activeClassName='active' to='/About'><Button className="aboutusButton">Discover About Us</Button></NavLink></Fade>
      </div>
        
      </div>
    );
  }
}

export default Home;