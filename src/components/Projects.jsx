import projectsData from "../data/projectsData";
import { useState, useRef } from "react";
import 'animate.css';
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Projects() {

  useEffect(()=> {
        AOS.init({
          duration:800,
          once:false,
        });
      }, []);
  

    return (
      <section className="projects-section" id="projects" data-aos="fade-up">
          <>
            <div className="projects-intro">Checkout my Projects 👩🏻‍💻</div>
    
            <div className="project-list-container">
              {projectsData.map((prj) => (
                <div key={prj.id} className="project" data-aos={prj.data}>
                  <a href={prj.webpage} target="_blank" rel="noopener noreferrer">
                    <div className="projects-image">
                      <img src={prj.image} alt={prj.name} className="prj-image" tabIndex={0} />
                    </div>
                  </a>
    
                  <div className="project-right-side">
                    <div className="project-personal">🌟 PERSONAL PROJECT</div>
                    <div className="project-title">{prj.name}</div>
                    <div className="project-text">{prj.text}</div>
                    <div className="project-skills">{prj.skill}</div>
    
                    <div className="projects-links">
                      <div className="project-repo">
                        <a href={prj.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
                      </div>
    
                      <div className="projects-middledot">•</div>
    
                      <div className="project-webpage">
                        <a href={prj.webpage} target="_blank" rel="noopener noreferrer">Website</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>

        <div className="project-buttons" data-aos="fade-down-left">
          <a href="https://github.com/mynameisjonelledev" target="_blank" rel="noopener noreferrer"><button className="projects-repos-buttons animate__animated animate__bounce">More on GitHub </button></a>
          <a href="https://bitbucket.org/mynameisjonelledev/workspace/repositories/" target="_blank" rel="noopener noreferrer"><button className="projects-repos-buttons animate__animated animate__bounce">More on Bitbucket</button></a>
        </div>
      </section>
    )
  }