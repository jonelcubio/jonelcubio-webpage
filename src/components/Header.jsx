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

          <a href="#about"><div className="header-about">About</div></a>

          <a href="#projects"><div className="header projects">Projects</div></a>

          <a href="#question"><div className="header-contact">Contact</div></a>

          <a href="jonelle.pdf" download><button className="header-cv">Curriculum</button></a>
        </div>
      </div>
    </header>
  );
}