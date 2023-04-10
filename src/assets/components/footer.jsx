import React from "react";
import '../styles/footer.css'

export default function Footer({load}) {
  return (
    <div className={load ? ("mainFooter--container"):("mainFooter--container absolute")}>
      <h1>® Mohamed Ashraf</h1>
      <div className="social-icons">
            <a href="https://www.linkedin.com/in/mohamedashrraf222/" target="_blank">linkedin <i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/mohamed_ashraf.222/" target="_blank">instagram <i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/mohamed.mo.585/" target="_blank">facebook <i className="fab fa-facebook"></i></a>
            <a href="https://github.com/mohamedashrraf222" target="_blank">github <i className="fab fa-github"></i></a>
        </div>
    </div>
  );
}
