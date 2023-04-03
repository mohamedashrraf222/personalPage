import Squars from "./Squars";
import Header from "./Header";
import Footer from "./footer";
import "../styles/contact.css"

const Contact = () => {
  return (
    <dir>
      <Squars />
      <Header />
      <div id="contact-me">
        <div>
          <h1> <i class="fa-regular fa-envelope"></i> Email : <a href="mailto:mohamedashrraf222@gmail.com">mohamedashrraf222@gmail.com</a> </h1>
          <h1> <i class="fa-solid fa-phone"></i> phone number : <a href="tel:+201145642615"> +201145642615</a> </h1>
          <h1> <i class="fab fa-linkedin"></i> Linkedin : <a href="https://www.linkedin.com/in/mohamedashrraf222/">https://www.linkedin.com/in/mohamedashrraf222/</a></h1>
        </div>
      <img src="/personalPage/images/contact2.svg" className="mySVG" />
      </div>
        <Footer />
    </dir>
  );
};

export default Contact;
