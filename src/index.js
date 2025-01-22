import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter
import App from './App';
import './index.css';
import BlogNewYear from './blog/blognewyear'; // Import the blog page for routing

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}> {/* Ensure correct base path for GitHub Pages */}
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={<App />} />
      
      {/* Route for BlogNewYear page */}
      <Route path="/blognewyear" element={<BlogNewYear />} />
      
      {/* Add other routes as needed */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
