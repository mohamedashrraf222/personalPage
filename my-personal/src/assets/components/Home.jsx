import Footer from "./footer";
import Squars from "./Squars";
import Profile from "./Profile";
import Header from "./Header.jsx";
import "../styles/home.css";

const Home = (props) => {
  return (
    <div>
      <div className="centere">
        <Squars />
        <Header />
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
