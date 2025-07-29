import catchphrase from "../catchphrase/catchphrase-main.js";
import {useState, useEffect} from "react";
import 'animate.css';
import TrueFocus from "../react-bits/TrueFocus.jsx";

export function Main() {

  const [randomPhrase, setRandomPhrase] = useState('');

  useEffect(()=> {
    const randomId = Math.floor(Math.random() * 5) + 1;
    const selected = catchphrase.find(item => item.id === randomId) ?.phrase;
    setRandomPhrase(selected || 'and I solve web problems in a creative way.')
  }, []);


  return(
    <main>
      <div className="main-inner">
        <h1 className="main-hello">Hello <span className="animate__animated animate__headShake">👋</span></h1>

        <TrueFocus />

        <h2 className="main-catchphrase">{randomPhrase}</h2>
        
        <div className="main-links">
          <a href="https://www.linkedin.com/in/jonel-cubio-bb173412a/" target="_blank"><button className="main-linkedin links">LinkedIn</button></a>

          <a href="https://github.com/jonelcubio" target="_blank"><button className="main-github links">GitHub</button></a>

          <a href="https://bitbucket.org/mynameisjonelledev/" target="_blank"><button className="main-bitbucket links">Bitbucket</button></a>

           <a href="mailto:jonelcubio021@gmail.com" target="_blank"><button className="main-mail links">Mail</button></a>
        </div>
      </div>
    </main>
  );
}