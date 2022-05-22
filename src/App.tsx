import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import City from "./views/City";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:city" element={<City />} />
    </Routes>
  );
};

export default App;
