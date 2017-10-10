import React, { Component } from 'react';
import './Projects.css';
import { Carousel } from 'react-bootstrap';


class Projects extends Component {
  render() {
    return (
      <div className="project">
        <h1>Projects</h1>
        <div className="apparelcontainer"><p className="apparel" >APPAREL</p></div>
        <Carousel>
          <Carousel.Item >
            <img className="image" width={900} height={500} alt="900x500" src="http://www.sepeb.com/pretty-backgrounds/pretty-backgrounds-016.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={500} alt="900x500" src="https://paulmason.name/media/demos/full-screen-background-image/background.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/A7ZkZazfvao/maxresdefault.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="signcontainer"><p className="signs" >SIGNS</p></div>
        <Carousel>
          <Carousel.Item >
            <img className="image" width={900} height={500} alt="900x500" src="http://www.sepeb.com/pretty-backgrounds/pretty-backgrounds-016.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={500} alt="900x500" src="https://paulmason.name/media/demos/full-screen-background-image/background.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/A7ZkZazfvao/maxresdefault.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="ticketcontainer"><p className="tickets">TICKETS</p></div>
        <Carousel>
          <Carousel.Item >
            <img className="image" width={900} height={400} alt="900x500" src="http://www.sepeb.com/pretty-backgrounds/pretty-backgrounds-016.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={400} alt="900x500" src="https://paulmason.name/media/demos/full-screen-background-image/background.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={400} alt="900x500" src="https://i.ytimg.com/vi/A7ZkZazfvao/maxresdefault.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="image4-contanier">
        <div className="backdropcontainer"><p className="backdrop">BACKDROP</p></div>
        <Carousel>
          <Carousel.Item >
            <img className="image" width={900} height={400} alt="900x500" src="http://www.sepeb.com/pretty-backgrounds/pretty-backgrounds-016.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={500} alt="900x500" src="https://paulmason.name/media/demos/full-screen-background-image/background.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/A7ZkZazfvao/maxresdefault.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    );
  }
}

export default Projects;