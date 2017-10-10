import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  
  render() {
    return (
        <div id="nav" className={this.props.showingNavbar}>
        <ul>
           <div className="navHome"> <li><NavLink onClick={this.props.disappearNavbar} activeClassName='active' exact to='/'>HOME</NavLink></li></div>
            <li><NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/About'>ABOUT US</NavLink></li>
            <li><NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Projects'>PROJECTS</NavLink></li>
            <li><NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Request'>REQUESTS</NavLink></li>
            <li><NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Contact'>CONTACT US</NavLink></li>
        </ul>
        </div>
    );
  }
}

export default Nav;
