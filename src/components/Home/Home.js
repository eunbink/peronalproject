import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Typist from 'react-typist';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import bluehorizon from '../../Images/Blue-Horizon.mp4';



class Home extends Component {
  
  
  render() {
    return (
      <div className="home_Container">
       <video autoPlay loop="true" id="video">
         <source src={ bluehorizon } type="video/mp4"/>
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
        
        <Flip x delay={500} duration={2000}><NavLink activeClassName='active' to='/About'><Button className="aboutusButton">Discover About Us</Button></NavLink></Flip>
      </div>
        
      </div>
    );
  }
}

export default Home;