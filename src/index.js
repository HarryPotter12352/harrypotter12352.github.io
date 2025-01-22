import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import BlogNewYear from './blog/blognewyear'; // Make sure this path is correct

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blognewyear" element={<BlogNewYear />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);