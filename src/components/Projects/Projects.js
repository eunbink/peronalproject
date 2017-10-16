import React, { Component } from 'react';
import './Projects.css';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showApparel:false,
      showLogo: true,
      showTicket:false,
      showBook:false,
    }
    // this.showProjects = this.showProjects.bind(this);
    this.showOneCarousel = this.showOneCarousel.bind(this);
  }
  // showProjects (){
  //   this.setState({
  //     showApparel : !this.state.showApparel,
  //     showLogo : !this.state.showLogo,
  //     showTicket : !this.state.showTicket,
  //     showBook : !this.state.showBook
  //   })
  // }
  showOneCarousel (carousel){
    this.setState({
      showApparel: carousel === "apparel" ? true : false,
      showLogo: carousel === "logo" ? true : false,
      showTicket: carousel === "ticket" ? true : false,
      showBook: carousel === "books" ? true : false,
    })
    console.log(carousel);
  }


  render() {
    return (
      <div className="project_container">
        <h1 className="projecttext">Projects</h1>
        <div className="wrap">
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer1"><p id="apparel" >APPARELS</p></div>
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer2"><p id="logo" >LOGOS</p></div>
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer3"><p id="ticket">TICKETS</p></div>
        <div onClick={(e)=>{this.showOneCarousel(e.target.id)}} className="picturecontainer4"><p id="books">BOOKS</p></div>
        </div>
        
        
       { this.state.showApparel ? <Carousel>
          <Carousel.Item >
            <img className="image" width={500} height={250} alt="900x500" src="https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="900x500" src="https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="900x500" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/sign-rre.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> : null }

        
         { this.state.showLogo ? <Carousel>
          <Carousel.Item >
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2013/02/QuietCreek-logo.png&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Logo</h3>
              <p>Quiet Creek Construction</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2011/08/Infinity Logo.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Logo</h3>
              <p>Infinity Consultants</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/logo-psychotique.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Logo</h3>
              <p>Psychotic</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> : null }

        
       { this.state.showTicket ? <Carousel>
          <Carousel.Item >
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/sign-rre.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Sign</h3>
              <p>River Rock Estates Development Sign</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/catalog-chic.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Brochure</h3>
              <p>Shimmer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/business-card-eclipse.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Buisness Card</h3>
              <p>Eclipse Solar Solutions</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> : null }
       
        
       { this.state.showBook ? <Carousel>
          <Carousel.Item >
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/book-findingyourself.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Book</h3>
              <p>Finding Yourself</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2012/11/Alyth-book-jacket-design.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Book</h3>
              <p>Alyth</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={500} height={250} alt="500x250" src="http://www.bigfatlogos.com/wp-content/themes/dpmg-theme/library/timthumb.php?src=http://www.bigfatlogos.com/wp-content/uploads/2009/09/book-richinsix.jpg&w=630&h=378&zc=1" />
            <Carousel.Caption>
              <h3>Book</h3>
              <p>Rich in Six</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> : null }
        
        <NavLink className="Admin_button" activeClassName='active' to='/Login'>ADMIN LOGIN</NavLink>
      </div>
    );
  }
}

export default Projects;