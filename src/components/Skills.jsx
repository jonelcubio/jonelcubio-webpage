import css from "../assets/css.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import vscode from "../assets/vscode.png"

export function Skills() {
  return(
    <section className="skills-container">
      <div className="skills-title">📋 Skills & Tools</div>

      <div className="skills-lists-con">
        <div className="skills-li-li">🛠️ Frontend Development</div>
        <div className="skills-li-li"><img src={css}className="skills-li-li-ico" /> CSS</div>
        <div className="skills-li-li"><img src={js}className="skills-li-li-ico" /> Javascript</div>
        <div className="skills-li-li"><img src={github}className="skills-li-li-ico" /> GitHub</div>
        <div className="skills-li-li"><img src={bitbucket}className="skills-li-li-ico" /> Bitbucket</div>
        <div className="skills-li-li"><img src={vscode}className="skills-li-li-ico" /> Visual Studio Code</div>
      </div>
    </section>
  );
}