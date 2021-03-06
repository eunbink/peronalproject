import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import router from './router.js'
import facebook from './Images/facebookicon.png';
import instagram from './Images/instagramicon.png';
import linkedin from './Images/linkicon.png';




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
        </div>  
        
        <div className="follow">
          <div><a href="https://www.facebook.com/BFDnSign/"><img className="facebook" src={ facebook } /></a></div>
          <div><img className="instagram" src={ instagram } /></div>
          <div><a href="https://www.linkedin.com/feed/"><img className="linkedin"  src= { linkedin } /></a></div>
          </div>

        <Nav showingNavbar={this.state.showmenu ? "slidemenu" : null} disappearNavbar={this.disappearNavbar} />
       
           
          
       {router}
     

       
      </div>
    );
  }
}



export default App;