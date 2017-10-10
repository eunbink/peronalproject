import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import router from './router.js'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';



class App extends Component {
  constructor() {
    super();
    this.state = {
      showmenu: false
    }
    this.disappearNavbar = this.disappearNavbar.bind(this);
  }
  disappearNavbar() {
    
    this.setState({
      showmenu: !this.state.showmenu
    })
  }

 

  render() {
    return (
      <div className="App">
       
        <div className="Naviconbox">
          <span className="Navicon" onClick={this.disappearNavbar}>
            <div className="Navbar"></div>
            <div className="Navbar"></div>
            <div className="Navbar"></div>

          </span>
          <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
          
        </div>
        

        <Nav showingNavbar={this.state.showmenu ? "slidemenu" : null} disappearNavbar={this.disappearNavbar} />
       {router}

      </div>
    );
  }
}



export default App;