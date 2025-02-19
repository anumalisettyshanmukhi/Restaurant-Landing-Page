import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import {BsFillPlayCircleFill} from "react-icons/bs";

const About =()=>{
  return(
    <div className ="about-section-container">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
    <p className="primary-subheading">About</p>
    <h1 className="primary-heading">
    Food Is An Important Part of A Balanced Diet
    </h1>
    <p className="primary-text">
    Lorem ipsum dolor sit amet . 
    The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.
    </p>
    <p className="primary-text">
    Non tincidunt magna not et elit. Dolor turips molestie dui magnis facilisis at fringilla quam.
    </p>
    <div className="about-buttons-container">
    <button className="secondary-button">Learn More</button>
    <button className="watch-video-button">
    <BsFillPlayCircleFill/> Watch Video</button>
    </div>
    </div>
    </div>
  )
}
export default About;