// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/map" element={<MapScreen />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
