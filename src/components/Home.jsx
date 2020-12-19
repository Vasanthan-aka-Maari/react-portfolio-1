import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="main-heading">
        Hi, I am <span>Vasanthan</span>
      </h1>
      <h2 className="sub-heading">Front-end Developer</h2>
      <div className="contact">
        <a href="mailto: someone@gmail.com" className="email">
          <i class="fas fa-envelope"></i> <span>youremail@gmail.com</span>
        </a>
        <ul className="social-links">
          <li>
            <a href="#" className="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
