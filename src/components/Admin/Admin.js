import React, { Component } from 'react';
import './Admin.css';
import { Button, Table, FormControl } from 'react-bootstrap';
import axios from 'axios';
const $ = require('jquery');
$.DataTable = require('datatables.net');


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      id: 0,
      invoice: "",
      isChecked: false,

    }
    this.addInvoice = this.addInvoice.bind(this);

  }

  componentWillUnmount(){
    $('#table_wrapper')
    .find('table')
    .DataTable()
    .destroy(true);
  }

  shouldComponentUpdate() {
      return false;
  }

  addInvoice(e) {
    axios.patch('api/quote/addinvoice', { invoice: this.state.invoice, invoiceid: this.state.id })
      .then(response => {
        this.setState({ quotes: response.data })
        alert('Your invoice has been saved!')
      })
  }

  componentDidMount() {
    axios.get('/api/quote/getquote').then(response => {
      this.setState({
        quotes: response.data,
        invoice: response.data,
      })

      const quotesDisplayed = response.data.map((quote, i) => { 
        return (
          [
          quote.id, 
          quote.name, 
          quote.phonenumber, 
          "", 
          "",
          quote.invoice, 
          
        
          ]
        )
      })

      $('#table').DataTable({
        data: quotesDisplayed,
        columns: [
          { title: "#" },
          { title: "Full Name" },
          { title: "Phone Number" },
          { title: "Comments" },
          { title: "Add Invoice" },
          { title: "Invoice #" },
          
        ]
      });

    })
  }
  

  render() {
    return (
      <div className="Admin_container">
        <a href={process.env.REACT_APP_LOGOUT}> <div className="logout_button">LOG OUT</div></a>
        <div className="Quote_Table">
          <Table id="table" className="table" striped bordered condensed hover>
            <thead>
              <tr>
                <th className="tabletitle"colSpan={6}>QUOTES TABLE</th>
              </tr>
              <tr>
                <th className="column-text">#</th>
                <th className="column-text" >Full Name</th>
                <th className="column-text" >Phone Number</th>
                <th className="column-text" >Comments</th>
                <th className="column-text" >Add Invoice</th>
                <th className="column-text" >Invoice #</th>
                
              </tr>
            </thead>
            <tbody className="datacolumn">
              
              </tbody>
              <tfoot>
              <tr>
                <td className="text" colSpan={6}><Button onClick={() => { this.addInvoice() }} className="admin_button">SAVE</Button></td>
              </tr>
            </tfoot>

          </Table>
        </div>


      </div>
    );
  }
}

export default Admin;

// quotes: this.keepInvoice(i)
// value={quote.invoice} 
 // <tr key={i} className="table_contanier">
      //   <td className="table_body">{quote.id}</td>
      //   <td className="table_body">{quote.name}i</td>
      //   <td className="table_body">{quote.email}</td>
      //   <td className="table_body">{quote.phonenumber}</td>
      //   <td className="table_body">{quote.designtype}</td>
      //   <td className="table_body">{quote.image}</td>
      //   <td className="table_body">{quote.duedate}</td>
        // <td className="table_body" ><FormControl className="invoiceinput" onChange={(e) => {
        //   this.setState({ invoice: e.target.value, id: quote.id });
        // }} type="text" /> </td>
      //   <td className="table_body">{quote.invoice}</td>
      //   <td className="table_body"><Button onClick={() => { this.deleteQuote(quote.id) }} className="delete_button">DELETE</Button></td>
      // </tr>