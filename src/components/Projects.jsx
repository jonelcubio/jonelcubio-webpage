import projectsData from "../data/projectsData";


export function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-intro">Checkout my Projects 👩🏻‍💻</div>

      <div className="project-list-container">
        {projectsData.map((prj) => (
        <div key={prj.id} className="project">
          <div className="projects-image">
          <img src={prj.image} alt={prj.name} className="prj-image" />
        </div>

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
    </section>
  );
}