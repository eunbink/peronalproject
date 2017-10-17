import React, { Component } from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import colorlogo from '../../Images/colorlogo.png'

class Login extends Component {
    render() {
      return (
        <div className="Login_container">
         <div className="logo_container">
           <img className="colorlogo"src={ colorlogo }/>
         <div><a href={process.env.REACT_APP_LOGIN}><Button className="login_button">Login</Button></a> </div>
          </div>
        </div>

      );
    }
  }
  
  export default Login;