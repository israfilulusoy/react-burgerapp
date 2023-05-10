import React from "react";
import BannerImage from "../assets/1beef.jpg";

function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className='aboutBottom'>
        <h1>About us</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          derit in voluptate velit esse laborum."
        </p>
      </div>
    </div>
  );
}

export default About;
