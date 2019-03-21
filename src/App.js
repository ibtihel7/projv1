import React, { Component } from 'react';
import './App.css';
import Footer from "./footer";
import Nav from "./nav";
import Logoo from "./logoo" ;
import Testimonial from "./testimonial"
import Discover from './discover';
import Rooms from './rooms';
import Rooms1 from './rooms1';
import Intro from './intro';
import Reserv from'./reserv';
import Introduction from './introduction';
import Galery from './galery'

import Galeryintro from './galeryintro'
// import Image from 'C:/Users/ASUS/Desktop/projjjjjjjjjjjjj/src/3.jpg'
import Im from './im'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      {/* <Image /> */}
      {/* <Im/> */}
      <Introduction/>
      <Galeryintro/>
      <Discover/>
      <Logoo/>
      {/* <Reserv/> */}
      {/* <Intro/> */}
      <Rooms1/>
      <Rooms/>
      <Galery />
      {/* <br/> */}

      <Testimonial/>
    
      <Footer/>
      
      </div>
    );
  }
}

export default App;
