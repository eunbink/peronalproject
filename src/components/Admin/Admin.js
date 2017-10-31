import React, { Component } from 'react';
import './Admin.css';
import { NavLink } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import 'datatables.net-buttons';
import 'datatables.net-select';

const $ = require('jquery');
// Create global aliases for jquery
window.jQuery = window.$ = $;
$.DataTable = require('datatables.net');
require('datatables.net-editor');


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      id: 0,
      invoice: "",
      detail:"",
      isChecked: false,

    }
    this.addInvoice = this.addInvoice.bind(this);
    this.addDetail = this.addDetail.bind(this);
    this.reloadPage = this.reloadPage.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.addListeners = this.addListeners.bind(this);
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

  deleteQuote (id) {

    console.log(id);

    axios.delete(`/api/quote/${id}`).then(response =>{
      window.location.reload();
    })
  }
  
  addInvoice(e) {
    if(typeof this.state.invoice === 'string' || this.state.invoice instanceof String) {
      axios.patch('api/quote/addinvoice', { invoice: this.state.invoice, invoiceid: this.state.id })
        .then( res => { })
    }
  }
  
  addDetail(e) {
    if(typeof this.state.detail === 'string' || this.state.detail instanceof String) {
      axios.patch('api/quote/adddetail', { detail: this.state.detail, detailid: this.state.id })
        .then( res => { })
    }
  }

  reloadPage() {
    window.location.reload();
  }

  addListeners() {

    // Update state from invoice input box
    $('input[className=invoiceinput]').on('input', e => {
      
      this.setState({
        invoice: e.target.value,
        id: $(e.target).closest('tr').find('td:nth-child(1)').text(),
      })
    });

    $('input[className=detailinput]').on('input', e => {
      
      this.setState({
        detail: e.target.value,
        id: $(e.target).closest('tr').find('td:nth-child(1)').text(),
      })
    });

    $('button[className=deletebutton]').on('click', e => {
      
      this.deleteQuote($(e.target).closest('tr').find('td:nth-child(1)').text());
    });

  }

  componentDidMount() {
    axios.get('/api/quote/getquote').then(response => {
      this.setState({
        quotes: response.data,
        invoice: response.data,
        detail: response.data
      })

      const quotesDisplayed = response.data.map((quote, i) => { 
        return (
          [
          quote.id, 
          quote.name, 
          quote.email, 
          "",
          quote.detail, 
          "",
          quote.invoice,
          ""
          ]
        )
      })

      // Make sure listeners has the correct scope/this binding
      var listeners = this.addListeners;

      // DataTable code
      var table = $('#table').DataTable({
        // dom: 'Bfrltip',
        data: quotesDisplayed,
        drawCallback: function( settings ) {
          listeners();
        },
        columns: [
          { title: "ID" },
          { title: "Name" },
          { title: "Email" },
          { title: "Add Job Details",
          render: function (data, type, row){
            return '<input className="detailinput"/>';
              }
            },
          { title: "Job Details" },
          { title: "Add Invoice",
            render: function (data, type, row){
              return '<input className="invoiceinput"/>';
            }
          },
          { title: "Invoice #" },
          { title: "",
            render: function (data, type, row){
              return '<button className="deletebutton">Delete</button>';
                },
          },
        ],
        select: {
          style:    'os',
          selector: 'td:first-child'
        }
      });

    })
  }


  render() {
    return (
      <div className="Admin_container">
        <a href={process.env.REACT_APP_LOGOUT}> <div className="logout_button">LOG OUT</div></a>
        <NavLink activeClassName='active' to='/Pay'><div className="paying_button">PAY</div></NavLink>
        <div className="Quote_Table">
          <Table id="table" className="table" bordered condensed>
            <thead>
              <tr>
                <th className="tabletitle"colSpan={8}>JOB TICKETS</th>
              </tr>
              <tr>
                <th className="column-text" >ID</th>
                <th className="column-text" >Name</th>
                <th className="column-text" >Email</th>
                <th className="column-text" >Add Job Details</th>
                <th className="column-text" >Job Details</th>
                <th className="column-text" >Add Invoice</th>
                <th className="column-text" >Invoice #</th>
                <th className="column-text" ></th>
              </tr>
            </thead>
            <tbody className="datacolumn">
              
              </tbody>
              <tfoot>
              <tr>
                <td className="text" colSpan={8}><Button onClick={() => { this.addInvoice(); this.addDetail(); this.reloadPage(); }} className="admin_button">SAVE</Button></td>
              </tr>
            </tfoot>

          </Table>
          <div id="table_buttons">
            </div>
        </div>


      </div>
    );
  }
}

export default Admin;

// quotes: this.keepInvoice(i)no
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



// // Editor code
      // var editor = new $.fn.dataTable.Editor( {} );
      // new $.fn.dataTable.Editor( {
      //   // ajax: function ( method, url, d, successCallback, errorCallback ){
      //   //   console.log("hi");
      //   //   if ( d.action === 'create' ){
      //   //     console.log("in here");
      //   //   }

      //   //   successCallback( d );
      //   // },
      //   ajax: quotesDisplayed,
      //   table: '#table',
      //   fields: [
      //     {
      //       label: "Comments:",
      //       name: "Comments"
      //   }, {
      //       label: "Invoice:",
      //       name: "Add Invoice" 
      //   }
 
      //   ]
      // } );

      // $('#table').on( 'click', 'tbody td:not(:first-child)', function (e) {
      //   editor.inline( this );
      // } );

 // buttons: [
        //     { extend: "create", editor: editor },
        //     { extend: "edit",   editor: editor }
        // ]