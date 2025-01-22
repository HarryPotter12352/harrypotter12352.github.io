import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import PublicationsSection from './Publications';
import ContactSection from './Contact';
import Navbar from './Navbar';
import './index.css'; 
import PhysicsUtilitiesSection from './tools';
import BlogNewYear from './blog/blognewyear';

// Render the App component wrapped with Router for routing capabilities
ReactDOM.render(

  <Router>
    {/* <Navbar />
    <Hero />
    <About />
    <Experience />
    <PublicationsSection />
    <PhysicsUtilitiesSection />
    <ContactSection />  */}
    <Routes>
    <Route path = "/" element = {<App />}/>
    <Route path ="/blognewyear" element = {<BlogNewYear/>}/>
    </Routes> 
  </Router>,
  document.getElementById('root')
);
