/*
import Navbar from './navbar';
import './App.css';
import Home from './home';
import About from './About'
import Contact from "./contact";
import Footer from './footer';
import Menu from "./menu";

function App() {
  
  return (
      <div className='contents'>
        <Navbar/>
        <Home/>
        <About />
        <Menu/>
        <Contact/>
        <Footer />
      </div>

  );
}

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './About';
import Contact from './contact';
import Footer from './footer';
import Menu from './menu';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='contents'>
        <Routes>
        <Route path="/menu" element={<Menu/>} />
        <Route path='/' exact element={<Home/>}/>
        </Routes>
        <About/>
        <Contact/>
        <Footer />  
        
      </div>
    </Router>
  );
}

export default App;