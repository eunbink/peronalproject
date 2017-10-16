import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'



class Nav extends Component {
  
  render() {
    return (
        <div id="nav" className={this.props.showingNavbar}>
        <ul className="navHome">
            <NavLink onClick={this.props.disappearNavbar} activeClassName='active' exact to='/'><li>HOME</li></NavLink>
            <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/About'><li>ABOUT US</li></NavLink>
            <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Projects'><li>PROJECTS</li></NavLink>
            <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Request'><li>REQUESTS</li></NavLink>
            <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Contact'><li>CONTACT US</li></NavLink>
            
        </ul>
       
        </div>
    );
  }
}

export default Nav;
