import Projects from "./assets/components/Projects";
import Certificates from "./assets/components/Cirtificates";
import Contact from "./assets/components/Contact";
import Squars from "./assets/components/Squars";
import Header from "./assets/components/Header";
import Profile from "./assets/components/Profile";
import Footer from "./assets/components/footer";
import { Routes, Route, json } from "react-router-dom";
import "./assets/styles/home.css";


const MyApp = () => {
  return (
    <>
      <Squars />
      <div className="centere" id="home">
        <Header />
        <Profile />
      </div>
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes className="App">
      {/* <Route path="/personalPage/" element={<Home />} /> */}
      {/* <Route path="/personalPage/Projects" element={<Projects />} /> */}
      {/* <Route path="/personalPage/Certificates" element={<Certificates />} /> */}
      <Route path="/personalPage/Contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MyApp;
