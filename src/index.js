import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter
import App from './App';
import './index.css';
import BlogNewYear from './blog/blognewyear'; // Import your BlogNewYear component

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}> {/* Ensure this is set to handle subpaths */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blognewyear" element={<BlogNewYear />} />
      {/* Add more routes as necessary */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
