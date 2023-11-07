import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        <img src="logo.jpg"
                    width="400"
                    height="400"
                    alt="Logo"
                    style={{
                        width: "270px", 
                        height: "270px",textalign: "center"}} ></img>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 9381346141</span>
          <span>+91 99459 19672</span>
          <span>+91 76718 19594</span>
          <span>+91 83282 07499</span>
          <span>jojo@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;