import React, { Component } from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';

class Login extends Component {
    render() {
      return (
        <div className="Login_container">
         <div className="username_input"><input className="username" placeholder="Username"/></div>
         <div classNAme="password_input"><input className="password" placeholder="Password"/></div>
         <a href={process.env.REACT_APP_LOGIN}><Button className="login_button">Login</Button></a>
  
  
        </div>
      );
    }
  }
  
  export default Login;