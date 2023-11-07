import React,{useState} from 'react';
import About from './About'
import Contact from "./contact";
import Footer from './footer';
import Menu from './menu';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return ( 
        <nav className="navbar">
           <div className="aligne">
            <img src="logo.jpg"
                    width="200"
                    height="200"
                    alt="Logo"
                    style={{
                        width: "120px", 
                        height: "120px",textalign: "left"}} ></img>
                    <h1 style={{fontfamily: "Bell MT"}}>JoJo's Juice Shop</h1>

            
            <div className="links">
                
                <a href="#home" style={{color:"#43AA72"}}>Home</a>
                <Link to="/menu" style={{color:"#43AA72"}}>Menu</Link>
                <a href="#about" style={{color:"#43AA72"}}>About us</a>
                <a href="#contact" style={{color:"#43AA72"}}>Contact</a>
                <button  style={{
                    backgroundColor:"#43AA72",
                    color:"black",
                    borderRadius:"8px"
                }} >Order Now</button>
            </div>
      
  
</div>
</nav>
    );
}
    
export default Navbar;