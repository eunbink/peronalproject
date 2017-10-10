import React, { Component } from 'react';
import './Admin.css';
import { Button } from 'react-bootstrap';


class Admin extends Component {
    render() {
      return (
        <div className="Admin_container">
        <a href={process.env.REACT_APP_LOGOUT}> <Button className="logout_button">Logout</Button></a>
        </div>
      );
    }
  }
  
  export default Admin;