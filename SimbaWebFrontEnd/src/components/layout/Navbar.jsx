import React from "react";
import { Link } from "react-router-dom";
//import { ExternalLink } from 'react-external-link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img className="logo" src="/images/Simba-ICON.png" alt="logo" />
      </a>
      <p className="nav-simba-title">
        <span className="title-name">SIMBA</span>
        <br />
        <span className="title-slogan">The Lion King (Learning App)</span>
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link" rel="noopener noreferrer">
              <span>About Us</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#TrainingVideo" className="nav-link" rel="noopener noreferrer">
              <span>Preview</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#OurTeam" className="nav-link" rel="noopener noreferrer">
              <span>Our Team</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="https://simbalearningapp-edb1a.web.app"
              target="_blank"
              className="btn-home-login"
              rel="noopener noreferrer"
            >
              <span>Login</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
