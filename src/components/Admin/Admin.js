import React, { Component } from 'react';
import './Admin.css';
import { Button, Table } from 'react-bootstrap';


class Admin extends Component {
    render() {
      return (
        <div className="Admin_container">
        <a href={process.env.REACT_APP_LOGOUT}> <Button className="logout_button">LOGOUT</Button></a>
        <div className="Quote_Table">
        <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>



  
  </div>
);

        </div>
      );
    }
  }
  
  export default Admin;