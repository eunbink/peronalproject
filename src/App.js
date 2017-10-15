import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import router from './router.js'
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
        </div>  
        <span className="logos">       
          <div><img className="facebook" src="https://img00.deviantart.net/19a0/i/2016/339/7/5/facebook_logo_white_png_transparent_by_rishabh_bhurli-daqq2bd.png" /></div>
          <div><img className="instagram" src="https://straypet.net/wp-content/uploads/2014/11/instagram-icon-good.png" /></div>
          <div><img className="linkedin" src="https://d3pl14o4ufnhvd.cloudfront.net/v2/uploads/a608d944-7012-4621-a978-6c34b98cae6c/49374fa07eefa5bc774438fbdedbba5334ccff75_original.png" /></div>
          </span>
        
        <Nav showingNavbar={this.state.showmenu ? "slidemenu" : null} disappearNavbar={this.disappearNavbar} />
       {router}
     
      </div>
    );
  }
}



export default App;