import projectsData from "../data/projectsData";
import { useEffect, useState, useRef } from "react";


export function Projects() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            console.log('Observe')
          }
        },
        { threshold: 0.1}
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section className="projects-section" id="projects" ref={ref} style={{minHeight: "300px"}}>
        {isVisible && (  // Wrap everything inside a single parent
          <>
            <div className="projects-intro">Checkout my Projects 👩🏻‍💻</div>
    
            <div className="project-list-container">
              {projectsData.map((prj) => (
                <div key={prj.id} className="project">
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
        )}
      </section>
    )
  }