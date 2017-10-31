import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
    
  }

  render() {
    return (
      <div id="nav" className={this.props.showingNavbar}>
        <ul className="navHome">
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' exact to='/'><li>HOME</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/About'><li>ABOUT US</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Request'><li>REQUESTS</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Contact'><li>CONTACT US</li></NavLink>
          
        
        </ul>
        
      </div>
    );
  }
}

export default Nav;
