import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import arrow from '../../Images/arrow.png';
import facebook from '../../Images/facebookicon.png';
import instagram from '../../Images/instagramicon.png';
import linkedin from '../../Images/linkicon.png';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
    this.showIcon = this.showIcon.bind(this);
    
  }
  showIcon () {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div id="nav" className={this.props.showingNavbar}>
        <ul className="navHome">
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' exact to='/'><li>HOME</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/About'><li>ABOUT US</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Projects'><li>PROJECTS</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Request'><li>REQUESTS</li></NavLink>
          <NavLink onClick={this.props.disappearNavbar} activeClassName='active' to='/Contact'><li>CONTACT US</li></NavLink>
          
          <img onClick = {this.showIcon} className="arrow2" src={ arrow }/>
        </ul>
        
          {this.state.show ? <div className="logos">
          <div><img className="facebook" src={ facebook } /></div>
          <div><img className="instagram" src={ instagram } /></div>
          <div><img className="linkedin"  src= { linkedin } /></div>
          </div>
          : null}


      </div>
    );
  }
}

export default Nav;
