import React, { Component } from 'react';
import './About.css';
import { Carousel, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import multiple from '../../Images/multiple.mp4';
import colorshirts from '../../Images/colorshirts.JPG';


class About extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showApparel:false,
      showLogo: false,
      showtradeshow:false,
      showmarketingproducts:true,
    }
    this.showProjects = this.showProjects.bind(this);
    this.showOneCarousel = this.showOneCarousel.bind(this);
  }

  showOneCarousel (carousel){
    this.setState({
      showApparel: carousel === "apparel" ? true : false,
      showLogo: carousel === "logo" ? true : false,
      showtradeshow: carousel === "tradeshow" ? true : false,
      showmarketingproducts: carousel === "marketingproducts" ? true : false,
    })
  }
 showProjects () {
   this.setState({
     show: !this.state.show
   })
 }

  render() {
    return (
      <div className="about_container">
          <video autoPlay loop="true" id="video3">
         <source src={ multiple } type="video/mp4"/>
         </video>
     
      
      <div className="about">
          <p  className="aboutparagraph">About Us</p>
          <p className="aboutexplain">Since the 1990s we’ve tackled design and fulfillment projects  with our competent and highly trained creative people.  We offer a free quote or consultation of your current or budgeted advertising plans, and the expertise to help you position your product or service at the top of your competition!
          </p>
          </div>
      
          
      <Button onClick={this.showProjects} className="project-button" > Discover Projects </Button>
     {this.state.show ?  <Fade top duration={1500}><div className="project_container">
        <div className="wrap">
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer1"><p id="apparel" >CLOTHING & ACCESSORIES</p></div>
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer2"><p id="logo" >LOGOS</p></div>
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer3"><p id="tradeshow">TRADE SHOW DISPLAYS</p></div>
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer4"><p id="marketingproducts">MARKETING PRODUCTS</p></div>
        </div>
        
        
       { this.state.showApparel ? <Fade duration={1000}><Carousel>
          <Carousel.Item >
            <img className="image"  src={colorshirts} />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"  src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/sign-rre.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></Fade> : null }

        
         { this.state.showLogo ? <Fade duration={1000}><Carousel>
          <Carousel.Item >
            <img className="image"  src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2013/02/QuietCreek-logo.png&w=630&h=378&zc=1" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2011/08/Infinity Logo.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/logo-psychotique.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></Fade> : null }

        
       { this.state.showtradeshow ? <Fade duration={1000}><Carousel>
          <Carousel.Item >
            <img className="image"   src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/catalog-chic.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/sign-rre.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/business-card-eclipse.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></Fade> : null }
       
        
       { this.state.showmarketingproducts ? <Fade duration={1000}><Carousel>
          <Carousel.Item >
            <img className="image"   src="https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image"   src="https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></Fade> : null }
        </div></Fade>: null }
        
        <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
     
      </div>
    );
  }
}

export default About;