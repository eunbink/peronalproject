import React, { Component } from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import redlogo from '../../Images/redlogo.png'

class Login extends Component {
    render() {
      return (
        <div className="Login_container">
         <div className="logo_container">
           <img className="redlogo"src={ redlogo }/>
         <div><a href={process.env.REACT_APP_LOGIN}><Button className="login_button">Login</Button></a> </div>
          </div>
        </div>

      );
    }
  }
  
  export default Login;