import React, { Component } from 'react';
import './Admin.css';
import { Button, Table, FormControl, Checkbox } from 'react-bootstrap';
import axios from 'axios';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes:[],
      id:0,
      invoice:"",
      isChecked:false,
      
    }
      
    this.deleteQuote = this.deleteQuote.bind(this);
    this.addInvoice = this.addInvoice.bind(this);
  
  }

  // keepInvoice(i){
  //   const quotes = this.state.quotes
  //   quotes[i].invoice = this.state.invoice
  //   return quotes;
  // }

deleteQuote (id) {
  axios.delete(`/api/quote/${id}`).then(response =>{
    alert('Your Quote has been deleted!')
  })
}

  addInvoice (e){
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
       invoice:response.data,
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
            <td ><FormControl className="invoiceinput" onChange={(e)=>
              {this.setState({invoice:e.target.value, id:quote.id});
              }} type="text"/>{quote.invoice} </td>
            <td>
              <th  className="text" colSpan="5"><Button onClick = {()=>{this.deleteQuote(quote.id)}} className="admin_button">DELETE</Button></th></td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="Admin_container">
        <a href={process.env.REACT_APP_LOGOUT}> <Button className="logout_button">LOG OUT</Button></a>
        <div className="Quote_Table">
          <Table className="table" striped bordered condensed hover>
            <thead>
              <tr>
                <th colSpan="10" className="text">Quote Table</th>
              </tr>
              <tr >
                <th className="column-text">#</th>
                <th className="column-text" >Full Name</th>
                <th className="column-text" >Email</th>
                <th className="column-text" >Phone Number</th>
                <th className="column-text" >Design Type</th>
                <th className="column-text" >Due Date</th>
                <th className="column-text" >Add Invoice</th>
                <th className="column-text" >Invoice #</th>
                <th className="column-text" >Delete</th>
                
              </tr>
            </thead>
            {quotesDisplayed}
            <tr>
                <th  className="text" colSpan="9"><Button onClick = {()=>{this.addInvoice()}}className="admin_button">SAVE</Button></th>
                
              </tr>
          </Table>
        </div>
        

        </div>
    );
  }
}

export default Admin;

// quotes: this.keepInvoice(i)
// value={quote.invoice} 