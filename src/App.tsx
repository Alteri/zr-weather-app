import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import City from "./City";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:city" element={<City />} />
    </Routes>
  );
};

export default App;
