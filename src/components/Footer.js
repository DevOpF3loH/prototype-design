import React from "react";
import f1 from "../assets/f1.png";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-component">
      <img className="footer-logo" src={f1} alt="F1 logo" />
      <div className="formula1-footer">
        <div className="formula1-container1">
          <h3 className="formula1-title">Formula 1</h3>
          <button className="footer">News</button>
          <button className="footer">Features</button>
          <button className="footer">Teams and Drivers</button>
          <button className="footer">Calendar</button>
        </div>
        <div className="formula1-container2">
          <button className="footer">Live Coverage</button>
          <button className="footer">Standings</button>
          <button className="footer">Results</button>
          <button className="footer">Statistics</button>
        </div>
      </div>
      <div class="fl"></div>
      <div className="series-footer">
        <h3 className="series-title">Series</h3>
        <button className="footer">Touring</button>
        <button className="footer">U.S.</button>
        <button className="footer">National</button>
        <button className="footer">Rally</button>
      </div>
      <div class="fl"></div>
      <div className="social-footer">
        <h3 className="social-title">Social Media</h3>
        <button className="footer">Follow us on Facebook</button>
        <button className="footer">Follow us on Twitter</button>
        <button className="footer">Watch Autosport videos on Youtube</button>
        <button className="footer">Join us on Google Plus</button>
      </div>
    </div>
  );
}

export default Footer;
