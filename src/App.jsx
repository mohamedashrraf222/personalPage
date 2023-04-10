import Home from "./assets/components/Home";
import Projects from "./assets/components/Projects";
import Certificates from "./assets/components/Cirtificates";
import Contact from "./assets/components/Contact";
import { Routes, Route, json } from "react-router-dom";

function App() {

  return (
    <Routes className="App">
      <Route path="/personalPage/" element={<Home />} />
      <Route path="/personalPage/Projects" element={<Projects />} />
      <Route path="/personalPage/Certificates" element={<Certificates />} />
      <Route path="/personalPage/Contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
