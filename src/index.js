import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import PublicationsSection from './Publications';
import ContactSection from './Contact';
import Navbar from './Navbar';
import './index.css'; // Import global CSS if you have one
import PhysicsUtilitiesSection from './tools';


// Render the App component wrapped with Router for routing capabilities
ReactDOM.render(
  <Router>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <PublicationsSection />
    <PhysicsUtilitiesSection />
    <ContactSection /> 
  </Router>,
  document.getElementById('root')
);
