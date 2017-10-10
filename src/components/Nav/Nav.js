import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  
  render() {
    return (
        <div id="nav" className={this.props.showingNavbar}>
        <ul className="navHome">
            <Link onClick={this.props.disappearNavbar} activeClassName='active' exact to='/'><li>HOME</li></Link>
            <Link onClick={this.props.disappearNavbar} activeClassName='active' to='/About'><li>ABOUT US</li></Link>
            <Link onClick={this.props.disappearNavbar} activeClassName='active' to='/Projects'><li>PROJECTS</li></Link>
            <Link onClick={this.props.disappearNavbar} activeClassName='active' to='/Request'><li>REQUESTS</li></Link>
            <Link onClick={this.props.disappearNavbar} activeClassName='active' to='/Contact'><li>CONTACT US</li></Link>
        </ul>
        </div>
    );
  }
}

export default Nav;
