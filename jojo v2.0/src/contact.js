import React from "react";
const Contact=()=>
{
    return(
        <div className="contact-page-wrapper" id= "contact">
        <h1 className="que">Have Question In Mind?</h1>
        <h1 className="help">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button"  style={{
                    backgroundColor:"#176107",
                    color:"white",
                    fontSize:"20px",
                    padding:"10px",
                    borderRadius:"20px"}}>Submit</button>
        </div>
      </div>
    )
}
export default Contact;