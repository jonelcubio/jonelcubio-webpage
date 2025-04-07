import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Questions() {

  useEffect(()=> {
        AOS.init({
          duration:800,
          once:false,
        });
      }, []);

  return(
    <section className="question-container" id="question" data-aos="flip-left">
      <div className="question-title">Question 🙋🏻</div>

      <div className="question-questions">Got any question? Don't hesistate to contact me!</div>

      <div className="question-pic-name">
        <div className="question-pic-con">
          <img src="https://i.postimg.cc/pLPd88nc/IMG20250406090439.jpg" className="question-pic-img" />
        </div>

        <div className="question-name-email">
        <div className="question-name">Jonel Cubio</div>
        <a href="mailto:jonelcubio021@gmail.com"><div className="question-email">jonelcubio021@gmail.com</div></a>
        </div>
        
      </div>
    </section>
  );
}