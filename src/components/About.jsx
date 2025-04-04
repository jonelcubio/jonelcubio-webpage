import about from "../assets/about-image.jpg";

export function About() {
  return(
    <section className="about-container">
      <div className="about-title">Who is Jonel?🤔</div>

      <div className="about-text-image-con">
        
        <div className="about-image">
          <img src={about} alt="about-image" className="about-image-img" />

          <div className="about-txt-con">
          <div className="about-txt">Hi, I'm Jonel! , but I prefer the spelling of <span className="txt-color">Jonelle.</span>'</div>

          <div className="about-txt">I'm an aspiring <span className="fr">Frontend Developer</span> with a passion for interactive, and user-friendly web applications.</div>

          <div className="about-txt">My journey into web development started with a curiosity for how websites work, and now, I'm dedicated to mastering React.js, JavaScript, and modern web technologies to create seamless digital experiences. </div>

          <div className="about-txt">Ps. I kinda copied the design of <a href="https://www.emanueledelmonte.it/" target="_blank" no rel="noopener noreferrer"><span className="fr">emanueledelmonte.it</span></a> , because his portfolio is awesome! </div>
          </div>
         
        </div>

        
      </div>
    </section>
  );
}