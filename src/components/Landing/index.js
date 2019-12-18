import React from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Holder from 'react-holder';
import ProjectTable from '../Landing/ProjectTable.png'

const Landing = () => (
  <div class = "container" align="left">
    <h1 align="center">What the Team 5 Grade Recorder has to offer!</h1>
    <Carousel>
  <Carousel.Item>
    <Image 
      align="left"  
      className="d-block w-100"
      src="holder.js/800x400?text=Grade Recorder&bg=373940"
      //src={ProjectTable***REMOVED***
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 color="black">Record your grades and CA in your different subjects</h3>
      <p>You can add your Module Code, Codule Name, what you achieved in your exam and what you achieved through Continious Assesment</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="holder.js/800x400?text=Create an Account&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Set up an account to Record your information</h3>
      <p>Log in whenever you need to see what your results were in the past, change any accout information or delete your account.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="holder.js/800x400?text=Interact with the Database&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Create, Update or Delete any information from the database</h3>
      <p>You can interact with our database easily and smoothly</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
);

export default Landing;
