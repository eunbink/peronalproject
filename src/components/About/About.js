import React, { Component } from 'react';
import './About.css';
import { Carousel, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Busy from '../../Images/Busy.mp4';
import colorshirts from '../../Images/colorshirts.JPG';
import hat from '../../Images/hat.jpg';
import western from '../../Images/westernshirt.JPG';
import hokulia from '../../Images/Hokulia.jpg';
import honey from '../../Images/Honey.JPG';
import mvhs from '../../Images/mvhs.JPG';
import valley from '../../Images/valley.png';
import mt from '../../Images/mt.png';
import amazon from '../../Images/amazon.JPG';
import limitless from '../../Images/limitless.JPG';
import stentorian from '../../Images/stentorian.jpg';
import scrollToComponent from 'react-scroll-to-component';
import mtech from '../../Images/mtech.png'
import colorlogo from '../../Images/colorlogo.png'


class About extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showApparel: true,
      showLogo: false,
      showtradeshow: false,
      showmarketingproducts: false,
    }
    this.showProjects = this.showProjects.bind(this);
    this.scrollProjects = this.scrollProjects.bind(this);
    this.showOneCarousel = this.showOneCarousel.bind(this);
  }

  showOneCarousel(carousel) {
    this.setState({
      showApparel: carousel === "apparel" ? true : false,
      showLogo: carousel === "logo" ? true : false,
      showtradeshow: carousel === "tradeshow" ? true : false,
      showmarketingproducts: carousel === "marketingproducts" ? true : false,
    })
  }
  showProjects() {
    this.setState({
      show: !this.state.show
    })
  }

  scrollProjects(val) {
    scrollToComponent(val, {     
      align: 'top',
      duration: 1500
    })
  }

  render() {
    return (
      <div className="about_container">
        <video autoPlay loop="true" id="video2">
          <source src={Busy} type="video/mp4" />
        </video>
      
        <div className="about">
          <img className="colorlogo" src={colorlogo}/>
          <p className="aboutexplain"> MAKE IT BIG! We offer a free quote or consultation of your current or budgeted advertising plans, and the expertise to help you position your product or service at the top of your competition!
          </p>
          <Flip x duration={1500}><Button
          onClick={()=>{this.showProjects(); setTimeout(()=>{this.scrollProjects(this.refs.pro)},100)}} className="project-button" > Discover Projects </Button></Flip>
        </div>

        
        {this.state.show ?
          <div ref="pro" className="project_container">
            <div className="wrap">
              <div onClick={(e) => { this.showOneCarousel(e.target.id) }} className="picturecontainer1"><p id="apparel" >CLOTHING & ACCESSORIES</p></div>
              <div onClick={(e) => { this.showOneCarousel(e.target.id) }} className="picturecontainer2"><p id="logo" >LOGOS</p></div>
              <div onClick={(e) => { this.showOneCarousel(e.target.id) }} className="picturecontainer3"><p id="tradeshow">TRADE SHOW DISPLAYS</p></div>
              <div onClick={(e) => { this.showOneCarousel(e.target.id) }} className="picturecontainer4"><p id="marketingproducts">MARKETING PRODUCTS</p></div>
            </div>

            {this.state.showApparel ? <Fade duration={1500}><Carousel>
              <Carousel.Item >
                <img className="image" width={700} height={200} src={colorshirts} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={hat} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={western} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel></Fade> : null}


            {this.state.showLogo ? <Fade duration={1500}><Carousel>
              <Carousel.Item >
                <img className="image" width={700} height={200} src={valley} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={mt} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={mtech} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel></Fade> : null}


            {this.state.showtradeshow ? <Fade duration={1500}><Carousel>
              <Carousel.Item >
                <img className="image" width={700} height={200} src={amazon} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={limitless} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={stentorian} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel></Fade> : null}


            {this.state.showmarketingproducts ? <Fade duration={1500}><Carousel>
              <Carousel.Item >
                <img className="image" width={700} height={200} src={hokulia} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={honey} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={mvhs} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel></Fade> : null}
          </div> : null}

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

export default About;