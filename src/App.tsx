import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import About from "./screens/About";
import Cakes from "./screens/Cakes";
import Contact from "./screens/Contact";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
