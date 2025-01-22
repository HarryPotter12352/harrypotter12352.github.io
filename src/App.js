import React from 'react';
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
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="publications">
        <PublicationsSection />
      </div>
      <div id="tools">
        <PhysicsUtilitiesSection />
      </div>
      <div id="blogs">
        <BlogsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default App;
