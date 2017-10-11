import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      <div className="home_Container">
    
        <h1 className="title">Home</h1>
        <p className="home_quote">Fulfilling Creative Job from ideas to delivery.</p>
        <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
      </div>
    );
  }
}

export default Home;