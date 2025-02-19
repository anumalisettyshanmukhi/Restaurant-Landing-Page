import React from "react"
import ProfilePic from "../Assets/veni_photo.jpg"
import {AiFillStar} from "react-icons/ai"

const Testimonial =() =>{
    return( 
        <div className="work-section-wrapper">
            <div className="work-section-top">
               <p className="primary-subheading">Testimonial</p>
               <h1 className="primary-heading">
                What They Are Saying
               </h1>
               <p className="primary-text">
                 Lorem ipsum dolor sit amet consectetur.Non tincidunt magna not et elit.
                 Dolor turips molestie dui magnis facilisis at fringilla quam.
               </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" width="60px" height="60px"/>
                <p>
                Lorem ipsum dolor sit amet consectetur.Non tincidunt magna not et elit.
                Dolor turips molestie dui magnis facilisis at fringilla quam.
                </p>
                <div style={{color:"yellow"}}classname="testimonials-starts-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>veni</h2>
            </div>
        </div>
    );
}
export default Testimonial;