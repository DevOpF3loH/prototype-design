import React from "react";
import afc from "../assets/afc.png";
import ajax from "../assets/ajax.png";
import arsenal from "../assets/arsenal.png";
import barcelona from "../assets/barcelona.png";
import bayern from "../assets/bayern.png";
import bournemouth from "../assets/bournemouth.png";
import bvb from "../assets/bvb.png";
import chelsea from "../assets/chelsea.png";
import everton from "../assets/everton.png";
import inter from "../assets/inter.png";
import juventus from "../assets/juventus.png";
import liverpool from "../assets/liverpool.png";
import manchesterc from "../assets/manchesterc.png";
import manchesteru from "../assets/manchesteru.png";
import milan from "../assets/milan.png";
import newcastle from "../assets/newcastle.png";
import psg from "../assets/psg.png";
import real from "../assets/real.png";
import roma from "../assets/roma.png";
import sevilla from "../assets/sevilla.png";
import f1 from "../assets/f1.png";

import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="nav">
          <img className="nav-logo" src={f1} alt="F1 logo" />
        </div>
        <div className="links-header">
          <div className="links">
            <button className="buttons">HOME</button>
            <button className="buttons">NEWS</button>
            <button className="buttons">DRIVER</button>
            <button className="buttons">TEAMS</button>
            <button className="buttons">PHOTOS</button>
            <button className="buttons">RESULTS</button>
            <button className="buttons">CALENDAR</button>
            <button className="buttons">TEST SESSIONS</button>
            <button className="buttons">SEARCH</button>
            <button className="buttons">TICKETS</button>
          </div>
          <hr />
          <div className="login-nav">
            <div className="login-box">
              <button className="login">Login</button>
              <div class="vl"></div>
              <button className="login">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="logos">
        <img className="foot-logo" src={afc} alt="afc" />
        <img className="foot-logo" src={ajax} alt="ajax" />
        <img className="foot-logo" src={arsenal} alt="arsenal" />
        <img className="foot-logo" src={barcelona} alt="barcelona" />
        <img className="foot-logo" src={bayern} alt="bayern" />
        <img className="foot-logo" src={bournemouth} alt="bournemouth" />
        <img className="foot-logo" src={bvb} alt="bvb" />
        <img className="foot-logo" src={chelsea} alt="chelsea" />
        <img className="foot-logo" src={everton} alt="everton" />
        <img className="foot-logo" src={inter} alt="inter" />
        <img className="foot-logo" src={juventus} alt="juventus" />
        <img className="foot-logo" src={liverpool} alt="liverpool" />
        <img className="foot-logo" src={manchesterc} alt="manchesterc" />
        <img className="foot-logo" src={manchesteru} alt="manchesteru" />
        <img className="foot-logo" src={milan} alt="milan" />
        <img className="foot-logo" src={newcastle} alt="newcastle" />
        <img className="foot-logo" src={psg} alt="psg" />
        <img className="foot-logo" src={real} alt="real" />
        <img className="foot-logo" src={roma} alt="roma" />
        <img className="foot-logo" src={sevilla} alt="sevilla" />
      </div>
    </>
  );
}

export default Header;
