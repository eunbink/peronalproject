import React, { Component } from 'react';
import './About.css';
import { NavLink } from 'react-router-dom';
import bluelogo  from './bluelogo.png';


class About extends Component {
  render() {
    return (
      <div className="about_container">
        <div className="about_body">

          <div className="about_title">About Us</div>
          <img className="companyimage"src={bluelogo}/>
          <div className="about_explanation"><p>Since the 1990s we’ve tackled design and fulfillment projects  with our competent and highly trained creative people.
            We offer a free quote or consultation of your current or budgeted advertising plans, and the expertise to help you position your product or service at the top of your competition!
            If you need duplication or packaging services — Whether it is 10 pieces or 10,000 pieces — we can design it,
             produce it and ship it for you. Because we do it all, you’ll have personalized attention and competitive pricing on the the highest quality design and production anywhere.
             </p></div>
        </div>
        <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>

      </div>
    );
  }
}

export default About;