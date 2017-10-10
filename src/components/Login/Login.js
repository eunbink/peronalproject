import React, { Component } from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import bluelogo from './bluelogo.png'

class Login extends Component {
    render() {
      return (
        <div className="Login_container">
         <div><img className= "bluelogo" src={ bluelogo }/> </div>
         <div><a href={process.env.REACT_APP_LOGIN}><Button className="login_button">LOGIN</Button></a> </div>
        </div>
      );
    }
  }
  
  export default Login;