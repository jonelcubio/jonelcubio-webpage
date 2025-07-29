import about from "../assets/about-image.jpg";
import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


export function About() {

  useEffect(()=> {
        AOS.init({
          duration:800,
          once:false,
        });
      }, []);

  return(
    <section className="about-container" id="about" data-aos="fade-up">
      <div className="about-title">Who is Jonel?🤔</div>

      <div className="about-text-image-con">
        
        <div className="about-image">
          <img src="https://i.ibb.co/tThwrMNf/461499477-10225959455237773-3511652537813814666-n.jpg" alt="about-image" className="about-image-img" />

          <div className="about-txt-con">
          <div className="about-txt">Hi, I'm Jonel! , but I prefer the spelling of <span className="txt-color">Jonelle.</span>'</div>

          <div className="about-txt">I'm an aspiring <span className="fr">Frontend Developer</span> with a passion for interactive, and user-friendly web applications.</div>

          <div className="about-txt">My journey into web development started with a curiosity for how websites work, and now, I'm dedicated to mastering React.js, JavaScript, and modern web technologies to create seamless digital experiences. </div>

          </div>
         
        </div>


        
      </div>
    </section>
  );
}