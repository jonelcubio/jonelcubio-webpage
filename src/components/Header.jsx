import hamburger from "../assets/hamburger.svg"
import { useState, useEffect } from "react";

export function Header() {

  return(
    <header>
      <div className="header-inside">
        <div className="header-brand">Jonelle.</div>
        <div className="header-space"></div>

        <div className="header-hamburger">
          <img src={hamburger} alt="hamburger-menu" className="hamburger-menu" />
          <div className="header-about">About</div>
          <div className="header projects">Projects</div>
          <div className="header-contact">Contact</div>
          <button className="header-cv">Curriculum</button>
        </div>
      </div>
    </header>
  );
}