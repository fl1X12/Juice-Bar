import React from "react";


const About = () => {
  return (
    <div className="ab-bg" id = "about">
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src=""alt="" />
      </div>
      <div className="about-section-image-container">
        <img src=" " alt="" />
      </div>
      
      <div className="about-section-text-container">
        
        <h1 className="flavor" style={{textAlign : "left"}}>
        Fun. Fresh. Flavor.
        </h1>
        <p className="primary-text">
        At JoJo's, it's our mission to make wellness the simplest, most delicious part of your day.

        </p>
        
        <p className="primary-text">
        Our smoothies, juices, and bowls are made fresh every day, packed with all natural ingredients and superfoods to nourish you.  
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;