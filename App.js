import React from 'react'
import "./App1.css";
import Home from "./WebComponent/Home";
import About from "./WebComponent/About";
import Work from "./WebComponent/Work";
import Testimonial from "./WebComponent/Testimonial";
import Contact from "./WebComponent/Contact";
import Footer from "./WebComponent/Footer";

function App(){
  return(
    <div className="App">
    <Home/>
    <About /> 
    <Work />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
  ); 
}

export default App;
