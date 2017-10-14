import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import bluelogo from './bluelogo.png';
import { Button } from "react-bootstrap";


class Home extends Component {
  render() {
    return (
      <div className="home_Container">
        
        <img className= "bluelogo" src={ bluelogo }/>
        <p className="home_quote">Fulfilling Creative Job from ideas to delivery.</p>
        <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
        <Button className="aboutusButton">Discover About Us</Button>
      </div>
    );
  }
}

export default Home;