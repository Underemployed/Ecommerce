import React from "react";
import "./hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>NEW</p>
            <img src={hand_icon} alt="hand-hand-icon" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections </div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} alt="" />
    </div>
  );
};

export default Hero;
