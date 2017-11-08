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
import bluelogo from '../../Images/bluelogo.png'
import scrolldown from '../../Images/scrolldown.gif';
import scrolling from '../../Images/scrolling.gif';
import bag from '../../Images/bag.JPG';
import paige from '../../Images/paige.JPG';
import Paradise from '../../Images/Paradise.png';
import Clayton from '../../Images/Clayton.png';
import k from '../../Images/7k.jpeg';
import spicy from '../../Images/spicy.JPG';
import ycc from '../../Images/ycc.jpg';
import bottle from '../../Images/Bottle.jpg';


class About extends Component {
  constructor() {
    super();
    this.state = {
      showwrap: false,
      showservice:false,
      showscroll:false,
      show: false,
      showApparel: true,
      showLogo: false,
      showtradeshow: false,
      showmarketingproducts: false,
    }
    // this.scrollProjects = this.scrollProjects.bind(this);
    this.showOneCarousel = this.showOneCarousel.bind(this);
    this.disappearScroll = this.disappearScroll.bind(this);
    this.showService = this.showService.bind(this);
    
  }

  showOneCarousel(carousel) {
    this.setState({
      showApparel: carousel === "apparel" ? true : false,
      showLogo: carousel === "logo" ? true : false,
      showtradeshow: carousel === "tradeshow" ? true : false,
      showmarketingproducts: carousel === "marketingproducts" ? true : false,
    })
  }
  disappearScroll(){
    this.setState({
      showscroll: !this.state.showscroll
    })
  }
  showService(){
    this.setState({
      showservice: !this.state.showservice
    })
  }

  // scrollProjects(val) {
  //   scrollToComponent(val, {     
  //     align: 'middle',
  //     duration: 1000
  //   })
  // }

  render() {
    return (
      <div className="about_container">
        <video auFliplay loop="true" id="video2">
          <source src={Busy} type="video/mp4" />
        </video>
   
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


            {this.state.showtradeshow ? <Fade duration={1500}><Carousel>
              <Carousel.Item >
                <img className="image" width={700} height={200} src={stentorian}  />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={limitless} />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image" width={700} height={200} src={amazon}/>
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
                <img className="image" width={700} height={200} src= {mvhs}/>
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
           

        <a href={process.env.REACT_APP_LOGIN}><Button className="Admin_button" >ADMIN LOGIN</Button></a>


      </div>
    );
  }
}

export default About;