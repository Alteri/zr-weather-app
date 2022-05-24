import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './views/Home';
import City from './views/City';

const App = () => {
  const isError = useSelector((state: { error: string }) => state.error);
  return (
    <Routes>
      <Route path="/" element={<Home isError={!!isError} />} />
      <Route path="/:city" element={<City isError={!!isError} />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
