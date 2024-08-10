import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;
