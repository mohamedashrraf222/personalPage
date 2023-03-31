import Home from './assets/components/Home'
import Projects from './assets/components/Projects';
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
