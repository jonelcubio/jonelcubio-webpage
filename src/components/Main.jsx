import catchphrase from "../catchphrase/catchphrase-main.js";
import {useState, useEffect} from "react";

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
        <h1 className="main-hello">Hello 👋</h1>
        <h1 className="main-name">I am Jonel Cubio</h1>
        <h2 className="main-catchphrase">{randomPhrase}</h2>
        
        <div className="main-links">
          <button className="main-linkedin links">LinkedIn</button>
          <button className="main-github links">GitHub</button>
          <button className="main-bitbucket links">Bitbucket</button>
          <button className="main-mail links">Mail</button>
        </div>
      </div>
    </main>
  );
}