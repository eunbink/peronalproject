import React, { Component } from 'react';
import './Pay.css';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout';
import stripe from './Stripekey';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import swal from 'sweetalert';

class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            paymentAmt: 1500,
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
                invoice: ''
            }
        }

        this.checkEmailInvoice = this.checkEmailInvoice.bind(this);
        this.changeIsChecked = this.changeIsChecked.bind(this);
    }

    checkEmailInvoice() {
        axios.get(`/api/quote?email=${this.state.quote.email}&invoice=${this.state.quote.invoice}`).then(response => {
            console.log(response);
            if (response.data.length > 0) {
                this.changeIsChecked();
            }
        })

        console.log('check email invoice is done');
    }

    changeIsChecked() {
        this.setState({
            isChecked: !this.state.isChecked
        })
        console.log('change is checked');
    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('/api/payment', { token, amount: this.state.paymentAmt }).then(response => {
            console.log(response)
            swal({
                icon: "success",
                title: "Payment has been Submitted!",
                text: "Thank You"
            });
        }).catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="pay-container">
                <a href={process.env.REACT_APP_LOGOUT}> <div className="logout_button">LOG OUT</div></a>
                <NavLink activeClassName='active' to='/Admin'><div className="paying2_button">TICKETS</div></NavLink>
                <div className="payform_container">

                <div className="payhere">
                    <p>PAY HERE</p>
                </div>
                    <div className="pay_form">

                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail2">


                                <FormControl className="input" onChange={(e) => {
                                    this.setState({
                                        quote: { ...this.state.quote, email: e.target.value }
                                    })
                                }} placeholder="Email" />

                            </FormGroup>

                            <FormGroup controlId="formHorizontalInvoice">


                                <FormControl className="input" onChange={(e) => {
                                    this.setState({
                                        quote: { ...this.state.quote, invoice: e.target.value }
                                    })
                                }} placeholder="Invoice #" value={this.state.quote.invoice} />

                            </FormGroup>
                            <FormGroup onSubmit={e => { e.preventDefault() }} className="pay" >

                            </FormGroup>

                        </Form>
                        {this.state.isChecked ? <Zoom>
                            <StripeCheckout className="pay_button"
                                token={this.onToken}
                                stripeKey={stripe.pub_key}
                                amount={this.state.paymentAmt}

                            /></Zoom> : <Button className="check_button" onClick={this.checkEmailInvoice}>Proceed to Payment</Button>}
                    </div>
                </div>
            </div>


        );
    }
}



export default Pay;