import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css'; 

import BlogNewYear from './blog/blognewyear';

// Render the App component wrapped with Router for routing capabilities
ReactDOM.render(

  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path = "/" element = {<App />}/>
    <Route path ="/blognewyear" element = {<BlogNewYear/>}/>
    </Routes> 
  </Router>,
  document.getElementById('root')
);
