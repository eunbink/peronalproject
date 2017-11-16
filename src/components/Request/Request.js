import React, { Component } from 'react';
import './Request.css';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Busy from '../../Images/Busy.mp4';
import swal from 'sweetalert';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
      isChecked: false,
      show: false,
      quote: {
        name: "",
        phoneNumber: "",
        email: "",
        designType: "",
        size: "",
        color: "",
        sides: "",
        singleDouble: "",
        quantity: "",
        dueDate: "",
        comments: "",
        image: '',
        invoice: '',
        decal:""
      }
    }


    this.checkBeforeSubmit = this.checkBeforeSubmit.bind(this);
    this.send = this.send.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.submitQuotesToDatabase = this.submitQuotesToDatabase.bind(this);
  }
  onSelect() {
    this.setState({
      select: ""
    });
  }
  checkBeforeSubmit() {
    if (this.state.quote.name === "" || this.state.quote.email === "") {
      swal({
        icon: "error",
        title: "Please Fill out the Form",
        text: "Please Check Again"
      })
    } else {
      swal({
        icon: "success",
        title: "Your Quote has been Submitted!",
        text: "Thank You"
      });
      this.submitQuotesToDatabase();
      this.send();
    }
  }

  submitQuotesToDatabase() {

    const body = {
      name: this.state.quote.name,
      email: this.state.quote.email,
      phonenumber: this.state.quote.phoneNumber,
      designtype: this.state.quote.designType,
      size: this.state.quote.size,
      color: this.state.quote.color,
      sides: this.state.quote.sides,
      sides2: this.state.quote.singleDouble,
      duedate: this.state.quote.dueDate,
      quantity: this.state.quote.quantity,
      comments: this.state.quote.comments,
      image: this.state.quote.image,
      decal: this.state.quote.decal,

    }
    axios.post('api/quote/addquote', body)
  }

  send() {
    const body = {
      designType: this.state.quote.designType,
      size: this.state.quote.size,
      color: this.state.quote.color,
      sides: this.state.quote.sides,
      singleDouble: this.state.quote.singleDouble,
      dueDate: this.state.quote.dueDate,
      phoneNumber: this.state.quote.phoneNumber,
      quantity: this.state.quote.quantity,
      comments: this.state.quote.comments,
      email: this.state.quote.email,
      name: this.state.quote.name,
      image: this.state.quote.image,
      decal: this.state.quote.decal,
      to: "kangeb1992@gmail.com",
      subject: "Request Quote"
    }
    axios.post('/api/send_quote', body)

  }



  render() {

    console.log(this.state)
    return (
      <div className='request_container'>
        <video autoPlay loop="true" id="video2">
          <source src={Busy} type="video/mp4" />
        </video>


        {     /* get a quote form */}
        <div className="quote-container">
          <Modal.Title id="contained-modal-title">Quote Form</Modal.Title>
          <div className="subtitle">We will contact you with a quote within 24 hours.</div>
          <div className="contact_form">
            <Form horizontal className="Quote_Form">


              {/* name */}
              <FormGroup controlId="formHorizontal" >
                <Col componentClass={ControlLabel} sm={2} className="title_input">
                  Name
             </Col>
                <Col sm={8}>
                  <FormControl className="inputtext" onChange={(e) => {
                    this.setState({
                      quote: { ...this.state.quote, name: e.target.value }
                    })
                  }} type="text" placeholder="Name" />
                </Col>
              </FormGroup>

              {/* phonenumber */}
              <FormGroup controlId="formHorizontal" >
                <Col componentClass={ControlLabel} sm={2} className="title_input">
                  Phone
                  </Col>
                <Col sm={8}>
                  <FormControl className="inputtext" onChange={(e) => {
                    this.setState({
                      quote: { ...this.state.quote, phoneNumber: e.target.value }
                    })
                  }} type="tel" placeholder="Phone #" />
                </Col>
              </FormGroup>
              {/* email */}
              <FormGroup controlId="formHorizontal">
                <Col componentClass={ControlLabel} sm={2} className="title_input">
                  Email
                 </Col>
                <Col sm={8}>
                  <FormControl className="inputtext" onChange={(e) => {
                    this.setState({
                      quote: { ...this.state.quote, email: e.target.value }
                    })
                  }} type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              {/* design type */}
              <FormGroup controlId="formHorizontal">
                <Col componentClass={ControlLabel} sm={2} className="title_input">
                  <ControlLabel>Design Type</ControlLabel>
                </Col>
                <Col sm={8}>
                  <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                    this.setState({
                      select: e.target.value,
                      quote: { ...this.state.quote, designType: e.target.value } //spread operator used to change big obect that wants to keep the data same time.
                    })
                  }}>
                    <option value="select">Please Select Design Type...</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Signs">Signs</option>
                    <option value="Flyers">Flyers</option>
                    <option value="Posters">Posters</option>
                    <option value="Banners">Banners</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Decals">Decals</option>
                    <option value="Others">Others</option>
                  </FormControl>
                </Col>
              </FormGroup>


              {/* -------------------------OPTIONS------------------------------- */}

              {/* --------T-Shirts------- */}
              {/* size */}
              {this.state.select === "T-Shirts" ?
                <div>
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Size/Quantity
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, size: e.target.value }
                        })
                      }} type="text" placeholder="ex) small - 10, medium - 8 etc." />
                    </Col>
                  </FormGroup>


                  {/* printed shirts - front/back/both */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Sides
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, sides: e.target.value }
                        })
                      }} >
                        <option value="select">Sides</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Both">Both</option>
                      </FormControl>
                    </Col>
                  </FormGroup>


                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="text" placeholder="Rushed job fee (1-2 days)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                    </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
                </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}


              {/* -----------Signs------------ */}

              {this.state.select === "Signs" ?
                <div>
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Size
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, size: e.target.value }
                        })
                      }} type="text" placeholder="Size" />
                    </Col>
                  </FormGroup>
                    {/* printed shirts - front/back/both */}
                    <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Sides
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, sides: e.target.value }
                        })
                      }} >
                        <option value="select">Sides</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Both">Both</option>
                      </FormControl>
                    </Col>
                  </FormGroup>

                  {/* how many */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Quantity
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, quantitiy: e.target.value }
                        })
                      }} type="number" placeholder="Quantity" />
                    </Col>
                  </FormGroup>

                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs extra)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
                      </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}



              {/* -------------Flyers-------------------- */}
              {this.state.select === "Flyers" ?
                <div>
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Size
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, size: e.target.value }
                        })
                      }} type="text" placeholder="Size" />
                    </Col>
                  </FormGroup>

                  {/* color  black and white option */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Color
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, color: e.target.value }
                        })
                      }} type="text" placeholder="Color" >
                        <option value="select">Color</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                      </FormControl>
                    </Col>
                  </FormGroup>

                    {/* printed shirts - front/back/both */}
                    <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Sides
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, sides: e.target.value }
                        })
                      }} >
                        <option value="select">Sides</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Both">Both</option>
                      </FormControl>
                    </Col>
                  </FormGroup>

                  {/* how many */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Quantity
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, quantitiy: e.target.value }
                        })
                      }} type="number" placeholder="Quantity" />
                    </Col>
                  </FormGroup>

                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs extra)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
                 </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}

              {/* -------------Posters-------------------- */}
              {this.state.select === "Posters" ?
                <div>
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Size
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, size: e.target.value }
                        })
                      }} type="text" placeholder="Size" />
                    </Col>
                  </FormGroup>

                  {/* color */}
                  <FormGroup controlId="formHorizontal">
                  <Col componentClass={ControlLabel} sm={2} className="title_input">
                    Color
               </Col>
                  <Col sm={8}>
                    <FormControl className="inputtext" onChange={(e) => {
                      this.setState({
                        quote: { ...this.state.quote, color: e.target.value }
                      })
                    }} type="text" placeholder="Color" />
                  </Col>
                </FormGroup>

                    {/* printed shirts - front/back/both */}
                    <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Sides
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, sides: e.target.value }
                        })
                      }} >
                        <option value="select">Sides</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Both">Both</option>
                      </FormControl>
                    </Col>
                  </FormGroup>


                  {/* how many */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Quantity
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, quantitiy: e.target.value }
                        })
                      }} type="number" placeholder="Quantity" />
                    </Col>
                  </FormGroup>

                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs )" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
               </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}

              {/* -------------Banners-------------------- */}
              {this.state.select === "Banners" ?
                <div>
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Size
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, size: e.target.value }
                        })
                      }} type="text" placeholder="Size" />
                    </Col>
                  </FormGroup>

                  {/* color */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Color
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, color: e.target.value }
                        })
                      }} type="text" placeholder="Color" />
                    </Col>
                  </FormGroup>

                   {/* printed shirts - front/back/both */}
                   <FormGroup controlId="formHorizontal">
                   <Col componentClass={ControlLabel} sm={2} className="title_input">
                     Sides
                </Col>
                   <Col sm={8}>
                     <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                       this.setState({
                         quote: { ...this.state.quote, sides: e.target.value }
                       })
                     }} >
                       <option value="select">Sides</option>
                       <option value="Front">Front</option>
                       <option value="Back">Back</option>
                       <option value="Both">Both</option>
                     </FormControl>
                   </Col>
                 </FormGroup>

                  {/* how many */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Quantity
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, quantitiy: e.target.value }
                        })
                      }} type="number" placeholder="Quantity" />
                    </Col>
                  </FormGroup>

                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs extra)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
               </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}


              {/* -----------Logo Design------------ */}

              {this.state.select === "Logo Design" ?
                <div>

                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs extra)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
                 </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}

                 {/* -----------Decals------------ */}

              {this.state.select === "Decals" ?
                <div>
                <FormGroup controlId="formHorizontal">
                   <Col componentClass={ControlLabel} sm={2} className="title_input">
                     Decal Type
                </Col>
                   <Col sm={8}>
                     <FormControl className="inputtext" componentClass="select" onChange={(e) => {
                       this.setState({
                         quote: { ...this.state.quote, decal: e.target.value }
                       })
                     }} >
                       <option value="select">Decal Type</option>
                       <option value="Car Decal">Car Decal</option>
                       <option value="Wall Decal">Wall Decal</option>
                       <option value="Glass Decal">Glass Decal</option>
                     </FormControl>
                   </Col>
                 </FormGroup>
                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs extra)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
                 </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}

                 {/* -----------Others------------ */}

              {this.state.select === "Others" ?
                <div>

                  {/* Due date */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Due Date
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, dueDate: e.target.value }
                        })
                      }} type="date" placeholder="Due Date (Rushed job costs extra)" />
                    </Col>
                  </FormGroup>

                  {/* Comments */}
                  <FormGroup controlId="formHorizontal">
                    <Col componentClass={ControlLabel} sm={2} className="title_input">
                      Comments
                 </Col>
                    <Col sm={8}>
                      <FormControl className="inputtext" className="comments" onChange={(e) => {
                        this.setState({
                          quote: { ...this.state.quote, comments: e.target.value }
                        })
                      }} type="text" placeholder="Write any Comments or Questions..." />
                    </Col>
                  </FormGroup>


                  <FormGroup >
                    <Col smOffset={1} sm={4}>
                      <Button onClick={this.checkBeforeSubmit} className="requestsubmit" type="submit">
                        SUBMIT
                 </Button>
                    </Col>
                  </FormGroup>
                </div>
                : null}
            </Form>
          </div>

        </div>
        <div className="ourservice">
          <p>Our Services</p>
          <div className="servicetype">
            <div>
              <p className="servicetitle" >PRINTING</p>
              <p>Ticekts/Brochures</p>
              <p>Clothes</p>
              <p>Backdrop/Banner</p>
              <p>Labels/Stickers</p>
            </div>
            <div>
              <p className="servicetitle" >DESIGNING</p>
              <p>Web Design</p>
              <p>Logo Branding</p>
              <p>Packaging</p>
              <p>Illustration</p>
            </div>
            <div>
              <p className="servicetitle" >CREATING</p>
              <p>Audio/Video Producing</p>
              <p>Book Pusblishing</p>
              <p>Logo Promotion</p>
              <p>Show Displaying</p>
            </div>
            <div>
              <p className="servicetitle" >GRAPHICS</p>
              <p>Logo Graphic</p>
              <p>Car Graphic</p>
              <p>Sign Graphic</p>
              <p>Glass/Window Graphic</p>
            </div>
          </div>

        </div>
        <a href={process.env.REACT_APP_LOGIN}><Button className="Admin_button" >ADMIN LOGIN</Button></a>
      </div>
    );
  }
}

// this.checkEmailInvoice(this.state.email, this.state.invoice)


export default Request;