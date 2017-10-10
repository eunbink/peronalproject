import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import router from './router.js'



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
            <div className="Navbar1"></div>
            <div className="Navbar1"></div>
            <div className="Navbar1"></div>

          </span>
        </div>


        <Nav ShowingNavbar={this.state.showmenu && "slidemenu"} disappearNavbar={this.disappearNavbar} />
       {router}

      </div>
    );
  }
}



export default App;