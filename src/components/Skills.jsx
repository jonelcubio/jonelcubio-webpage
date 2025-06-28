import css from "../assets/css.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import vscode from "../assets/vscode.png"
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import react from "../assets/react.png";


export function Skills() {
  useEffect(()=> {
      AOS.init({
        duration:800,
        once:false,
      });
    }, []);

  return(
    <section 
        className="skills-container" data-aos="fade-up" data-aos-offset="100">
      <div className="skills-title">📋 Skills & Tools</div>

      <div className="skills-lists-con">
        <div className="skills-li-li">🛠️ Frontend Development</div>
        <div className="skills-li-li"><img src={html}className="skills-li-li-ico" /> HTML</div>
        <div className="skills-li-li"><img src={css}className="skills-li-li-ico" /> CSS</div>
        <div className="skills-li-li"><img src={js}className="skills-li-li-ico" /> Javascript</div>
        <div className="skills-li-li"><img src={react}className="skills-li-li-ico" /> React.js</div>
        <div className="skills-li-li"><img src={github}className="skills-li-li-ico" /> GitHub</div>
        <div className="skills-li-li"><img src={bitbucket}className="skills-li-li-ico" /> Bitbucket</div>
        <div className="skills-li-li"><img src={vscode}className="skills-li-li-ico" /> Visual Studio Code</div>
        <div className="skills-li-li"><img src={tailwind} className="skills-li-li-ico" /> Tailwind CSS</div>
      </div>
    </section>
  );
}