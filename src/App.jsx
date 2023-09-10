import Contact from "./assets/components/Contact";
import Profile from "./assets/components/Profile";
import Footer from "./assets/components/footer";
import AllProjects from "./assets/components/AllProjects";
import "./assets/mainStyle.css";
import AllCertificates from "./assets/components/AllCertificates";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <main>
      <header>
        <div className="logo">
          <h1>Mohamed Ashraf</h1>
          <h3>Web developer</h3>
        </div>
        <div className="buttons">
          <a
            href="/personalPage/Mohamed Ashraf CV.pdf"
            className="downloadCV"
            download
          >
            Download my cv
          </a>
          <Link to="/personalPage/contactMe" className="getInTouch">
            Get in touch
          </Link>
        </div>
      </header>
      <section>
        <div className="navs">
          <Link to="/personalPage/" className="nav">
            About Me
          </Link>
          <Link to="/personalPage/Projects" className="nav">
            <i className="fa-brands fa-medapps"></i> <span>Projects</span>
          </Link>
          <Link to="/personalPage/certificates" className="nav">
            Certificates
          </Link>
          <Link to="/personalPage/contactMe" className="nav">
            Contact
          </Link>
        </div>
        <div className="pageContainer">
          <Routes className="App">
            <Route path="/personalPage/" element={<Profile />} />
            <Route path="/personalPage/Projects" element={<AllProjects />} />
            <Route path="/personalPage/contactMe" element={<Contact />} />
            <Route
              path="/personalPage/certificates"
              element={<AllCertificates />}
            />
          </Routes>
        </div>
      </section>
      <Footer />

      <div className="gradiant gradiantOne"></div>
      <div className="gradiant gradiantTwo"></div>
      <div className="gradiant gradiantThree"></div>
      <div className="gradiant gradiantFour"></div>
    </main>
  );
}

export default App;
