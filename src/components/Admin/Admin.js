import React, { Component } from 'react';
import './Admin.css';
import { Button, Table, FormControl } from 'react-bootstrap';
import axios from 'axios';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes:[],
      id:0,
      invoice:"",
    }
    this.addInvoice = this.addInvoice.bind(this);
    // this.keepInvoice = this.keepInvoice.bind(this);
  }

  // keepInvoice(i){
  //   const quotes = this.state.quotes
  //   quotes[i].invoice = this.state.invoice
  //   return quotes;
  // }

  addInvoice (){
    axios.patch('api/quote/addinvoice', {invoice: this.state.invoice, invoiceid:this.state.id})
    .then(response => { 
      this.setState({quotes:response.data})
      alert('Your invoice has been saved!')
    })
  }

  componentDidMount (){
    axios.get('/api/quote/getquote').then(response=>{
      console.log(response)
      this.setState({
        quotes: response.data,
       invoice:response.data
      })
    })   
  }

  render() {
    const quotesDisplayed=this.state.quotes.map((quote, i) =>{ 
      return ( 
        <tbody className="datacolumn">
            <tr>
            <td>{quote.id}</td>
            <td>{quote.name}i</td>
            <td>{quote.email}</td>
            <td>{quote.phonenumber}</td>
            <td>{quote.designtype}</td>
            <td>{quote.duedate}</td>
            <td>{quote.image}</td>
            <td><FormControl className="invoiceinput" onChange={(e)=>
              {this.setState({invoice:e.target.value, id:quote.id})}} type="text"/></td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="Admin_container">
        <a href={process.env.REACT_APP_LOGOUT}> <Button className="logout_button">LOGOUT</Button></a>
        <div className="Quote_Table">
          <Table className="table" striped bordered condensed hover>
            <thead>
              <tr>
                <th colSpan="8" className="text">Quote Table</th>
              </tr>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Design Type</th>
                <th>Due Date</th>
                <th>image</th>
                <th>invoice</th>
              </tr>
            </thead>
            {quotesDisplayed}
            <tr>
                <th  className="text" colSpan="4"><Button onClick = {()=>{this.addInvoice()}}className="admin_button">SAVE</Button></th>
                <th  className="text" colSpan="4"><Button className="admin_button">DELETE</Button></th>
              </tr>
          </Table>
        </div>
        );

        </div>
    );
  }
}

export default Admin;

// quotes: this.keepInvoice(i)
// value={quote.invoice} 