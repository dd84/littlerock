import React, { Component } from 'react';
import Header from "./components/Header_footer/Header"
import Featured from "./components/featured_courses/index"
import './App.css';
import { Element } from 'react-scroll'
import Discount from './components/discount/index';
import Pricing from './components/pricing';
import Location from "./components/location.js/index"
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
     <Featured/>
     <Element name="courses">
      <Discount/>
      </Element>
      <Element name="pricing">
     <Pricing/>
     </Element>
     <Element name="map">
     <Location/>
     </Element>
     <Footer/>
      </div>
    );
  }
}

export default App;
