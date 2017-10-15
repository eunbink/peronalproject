import React, { Component } from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';


class Login extends Component {
    render() {
      return (
        <div className="Login_container">
         <div><a href={process.env.REACT_APP_LOGIN}><Button className="login_button">Login</Button></a> </div>
        </div>
      );
    }
  }
  
  export default Login;