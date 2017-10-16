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
    this.deleteQuote = this.deleteQuote.bind(this);
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

  deleteQuote(id) {
    axios.delete(`/api/quote/${id}`).then(response => {
      alert('Your Quote has been deleted!')
    })
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
          [quote.id, quote.name, quote.email, quote.phonenumber, quote.designtype, quote.image, quote.duedate, "", quote.invoice, ""]
        )
      })

      $('#table').DataTable({
        data: quotesDisplayed
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
                <th className="column-text">#</th>
                <th className="column-text" >Full Name</th>
                <th className="column-text" >Email</th>
                <th className="column-text" >Phone Number</th>
                <th className="column-text" >Design Type</th>
                <th className="column-text" >Image</th>
                <th className="column-text" >Due Date</th>
                <th className="column-text" >Add Invoice</th>
                <th className="column-text" >Invoice #</th>
                <th className="column-text" ></th>
              </tr>
            </thead>
            <tbody className="datacolumn">
              
              </tbody>
              <tfoot>
              <tr>
                <td className="text" colSpan={10}><Button onClick={() => { this.addInvoice() }} className="admin_button">SAVE</Button></td>
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
      //   <td className="table_body" ><FormControl className="invoiceinput" onChange={(e) => {
      //     this.setState({ invoice: e.target.value, id: quote.id });
      //   }} type="text" /> </td>
      //   <td className="table_body">{quote.invoice}</td>
      //   <td className="table_body"><Button onClick={() => { this.deleteQuote(quote.id) }} className="delete_button">DELETE</Button></td>
      // </tr>