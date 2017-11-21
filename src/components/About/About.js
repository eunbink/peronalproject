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
import scrolldown from '../../Images/scrolldown.gif';
import scrolling from '../../Images/scrolling.gif';
import bag from '../../Images/bag.JPG';
import paige from '../../Images/paige.JPG';
import Paradise from '../../Images/Paradise.png';
import Clayton from '../../Images/Clayton.png';
import k from '../../Images/7k.jpeg';
import spicy from '../../Images/spicy.JPG';
import ycc from '../../Images/ycc.jpg';
import truck from '../../Images/truck.jpg';
import letterdecal from '../../Images/letterdecal.jpg';
import decal2 from '../../Images/decal2.jpg';
import walldecal from '../../Images/walldecal.jpg';
import bottle from '../../Images/Bottle.jpg';
import christmas from '../../Images/christmas.jpg';
import act from '../../Images/act.jpg';
import usflag from '../../Images/usflag.png';




class About extends Component {
  constructor() {
    super();
    this.state = {
      showwrap: false,
      showservice: false,
      showscroll: false,
      show: false,
      showDecal: false,
      showApparel: false,
      showLogo: false,
      showtradeshow: false,
      showmarketingproducts: true,
    }
    this.scrollAbout = this.scrollAbout.bind(this);
    this.showOneCarousel = this.showOneCarousel.bind(this);
    this.disappearScroll = this.disappearScroll.bind(this);
    this.showService = this.showService.bind(this);
    this.scrollProjects = this.scrollProjects.bind(this);

  }

  showOneCarousel(carousel) {
    this.setState({
      showDecal: carousel === "decal" ? true : false,
      showApparel: carousel === "apparel" ? true : false,
      showLogo: carousel === "logo" ? true : false,
      showtradeshow: carousel === "tradeshow" ? true : false,
      showmarketingproducts: carousel === "marketingproducts" ? true : false,
    })
  }
  disappearScroll() {
    this.setState({
      showscroll: !this.state.showscroll
    })
  }
  showService() {
    this.setState({
      showservice: !this.state.showservice
    })
  }

  scrollAbout(val) {
    scrollToComponent(val, {
      align: 'bottom',
      offset: 1000,
      duration: 1000

    })
  }
  scrollProjects(val) {
    scrollToComponent(val, {
      offset: -1000,
      duration: 1500

    })
  }

  render() {
    return (
      <div className="about_container">
        <video auFliplay loop="true" id="video2">
          <source src={Busy} type="video/mp4" />
        </video>

        <div className="project_container">


          <div ref="imgs" className="wrap">
            <div onClick={(e) => { this.showOneCarousel(e.target.id); setTimeout(() => { this.scrollProjects(this.refs.imgs) }, 10) }} className="picturecontainer1"><p id="apparel" >CLOTHING & ACCESSORIES</p></div>
            <div onClick={(e) => { this.showOneCarousel(e.target.id); setTimeout(() => { this.scrollProjects(this.refs.imgs) }, 10) }} className="picturecontainer2"><p id="logo" >LOGOS</p></div>
            <div onClick={(e) => { this.showOneCarousel(e.target.id); setTimeout(() => { this.scrollProjects(this.refs.imgs) }, 10) }} className="picturecontainer5"><p id="decal" >DECALS</p></div>
            <div onClick={(e) => { this.showOneCarousel(e.target.id); setTimeout(() => { this.scrollProjects(this.refs.imgs) }, 10) }} className="picturecontainer3"><p id="tradeshow">DISPLAYS</p></div>
            <div onClick={(e) => { this.showOneCarousel(e.target.id); setTimeout(() => { this.scrollProjects(this.refs.imgs) }, 10) }} className="picturecontainer4"><p id="marketingproducts">MARKETING PRODUCTS</p></div>
            <div onClick={() => { setTimeout(() => { this.scrollAbout(this.refs.pro) }, 10) }}><p id="about" >ABOUT US</p></div>
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
            <Carousel.Item>
              <img className="image" width={700} height={200} src={paige} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={bag} />
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
            <Carousel.Item>
              <img className="image" width={700} height={200} src={Paradise} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={Clayton} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel></Fade> : null}

          {this.state.showDecal ? <Fade duration={1500}><Carousel>
            <Carousel.Item >
              <img className="image" width={700} height={200} src={truck} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={decal2} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={walldecal} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={letterdecal} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel></Fade> : null}

          {this.state.showtradeshow ? <Fade duration={1500}><Carousel>
            <Carousel.Item >
              <img className="image" width={700} height={200} src={stentorian} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={limitless} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={amazon} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={k} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={spicy} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel></Fade> : null}


          {this.state.showmarketingproducts ? <Fade duration={1500}><Carousel>
            <Carousel.Item >
              <img className="image" width={700} height={200} src={christmas} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img className="image" width={700} height={200} src={act} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img className="image" width={700} height={200} src={mvhs} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" width={700} height={200} src={honey} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="image" width={700} height={200} src={bottle} />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel></Fade> : null}

        </div>

        <div className="AboutUs" ref="pro">
          <img className="bluelogo" src={colorlogo} />

          <div className="aboutexp">Creative Projects to fulfillment…
              Big Fat Design & Sign, and DPMG Fulfillment.
              We’ve got everything under one roof from seasoned Graphic Designers,
              to Next-day Duplication and Printing, to Sign Shop and Quick Banners,
              to Fulfillment and Mailing so you can standout above your competitors,
              Make your creative product fast and save you money in the process.</div>
          <div className="aboutexp2">Make it BIG! If you need to show off your product or service we also offer
              LOGO ADVERTISING with for one-stop business service for signs, digital color banners,
              vehicle wrap advertising, trade-show displays and Logo-promotion items. Click  <NavLink className="requestlink" activeClassName='active' to='/Request'>here</NavLink> to request.</div>

        </div>
        <div className="ourservice">
          <div className="maintitle">Our Services</div>
          <div className="servicetype">
            <div>
              <p className="servicetitle" >PRINTING</p>
              <p className="servicelist">Ticekts/Brochures</p>
              <p className="servicelist">Clothes</p>
              <p className="servicelist">Backdrop/Banner</p>
              <p className="servicelist">Labels/Stickers</p>
            </div>
            <div>
              <p className="servicetitle" >DESIGNING</p>
              <p className="servicelist">Web Design</p>
              <p className="servicelist">Logo Branding</p>
              <p className="servicelist">Packaging</p>
              <p className="servicelist">Illustration</p>
            </div>
            <div>
              <p className="servicetitle" >CREATING</p>
              <p className="servicelist">Audio/Video Producing</p>
              <p className="servicelist">Book Pusblishing</p>
              <p className="servicelist">Logo Promotion</p>
              <p className="servicelist">Show Displaying</p>
            </div>
            <div>
              <p className="servicetitle" >GRAPHICS</p>
              <p className="servicelist">Logo Graphic</p>
              <p className="servicelist">Car Graphic</p>
              <p className="servicelist">Sign Graphic</p>
              <p className="servicelist">Glass/Window Graphic</p>
            </div>
          </div>
          <div className="copyright-con">
          <div className="copyright">
            <div className="copyright-in">© Copyright 1998-2017 BigFatLogos. All Rights Reserved.</div>
            <div className="copyright-in">Thank you for visiting!</div>
            <div className="copyright-in"><img className="usflag"src={usflag}/>United States</div>
            <div className="copyright-in"><a href={process.env.REACT_APP_LOGIN}><Button className="adminlogin">Admin Login</Button></a></div>
          </div>
        </div>
        </div>
       


      </div>
    );
  }
}

export default About;