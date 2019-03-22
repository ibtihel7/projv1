import React, { Component } from 'react';
import './App.css';
import Footer from "./footer";
import Nav from "./nav";
import Logoo from "./logoo" ;
import Testimonial from "./testimonial"
import Discover from './discover';
import Indoor from './indoor';
import Outdoor from './outdoor';
import Intro from './intro';
import Reserv from'./reserv';
import Introduction from './introduction';
import Galery from './galery';
import Foodintro from './foodintro'

// import Galeryintro from './galeryintro'
import Listavis from './listavis';
import Listoccasion from './listeoccasion'
import Listfood from './listefood';
import Galeryintro from './galeryintrod';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      {/* <Image /> */}
      {/* <Im/> */}
      <Introduction/>
      {/* <Galeryintro/> */}
      <Listoccasion/>
      <Discover/>
      <Logoo/>
      {/* <Reserv/> */}
      {/* <Intro/> */}
      <Indoor/>
      <Outdoor/>
      <Foodintro/>
      <Listfood/>
      <Galeryintro/>
      <Galery />
      {/* <br/> */}
    
      <Testimonial/>
      <Listavis/>
    
      <Footer/>
      
      </div>
    );
  }
}

export default App;
