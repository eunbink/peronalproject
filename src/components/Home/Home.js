import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";

import Typist from 'react-typist';

class Home extends Component {
  
  
  render() {
    return (
      <div className="home_Container">
       <Typist 
           className="home_quote"
          avgTypingSpeed={40}
          startDelay={1000}
          onTypingDone={this.onHeaderTyped}> 
          Fulfilling Creative Jobs from Ideas to Delivery.
          </Typist>
        <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
        <NavLink activeClassName='active' to='/About'><Button className="aboutusButton">Discover About Us</Button></NavLink>
        
      </div>
    );
  }
}

export default Home;