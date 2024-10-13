import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ArtGallery from "./ArtGallery";
import ArtDetail from "./ArtDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtGallery />} />
        <Route path="/:objectNumber" element={<ArtDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
