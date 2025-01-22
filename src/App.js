import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import PublicationsSection from './Publications';
import PhysicsUtilitiesSection from './tools';
import ContactSection from './Contact';
import BlogsSection from './Blogs';
const App = () => {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <PublicationsSection />
    <PhysicsUtilitiesSection />
    <BlogsSection />
    <ContactSection />
  </>
  );
};

export default App;
