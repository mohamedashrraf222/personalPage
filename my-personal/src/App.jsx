import Home from "./assets/components/Home";
import Projects from "./assets/components/Projects";
import Certificates from "./assets/components/Cirtificates";
import Contact from "./assets/components/Contact";
import ScrollToTopOnRouteChange from "./assets/components/ScrollToTop";
import { Router, Routes, Route, json } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Certificates" element={<Certificates />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
