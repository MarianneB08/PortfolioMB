// Le composant "Skills" correspond à la section "Compétences" du site. Il contient notamment le composant "Skill" qui permet l'affichage
// des logos de la stack. Ces logos sont passés en props aux composants enfants "Skill".
// On utilise intersection-observer pour gérer le déclenchement d'animations au scroll.

import React from "react";
import { useInView } from "react-intersection-observer";
import logoHTML from "../assets/logo_HTML5.svg";
import logoCSS from "../assets/logo_CSS3.svg";
import logoJS from "../assets/logo_JavaScript.svg";
import logoSass from "../assets/logo_Sass.svg";
import logoGitHub from "../assets/logo_GitHub.svg";
import logoExpress from "../assets/logo_Express.svg";
import logoNode from "../assets/logo_Node.svg";
import logoReact from "../assets/logo_React.svg";
import logoMongo from "../assets/logo_MongoDB.svg";
import logoPostman from "../assets/logo_Postman.svg";
import Skill from "./Skill";
import skillsStyles from "../styles/components/skills.module.scss";

const Skills = () => {
  const options = {
    threshold: 0.1,
  };

  // On définit plusieurs ancrages avec le hook useInView pour déclencher des animations au scroll à différents endroits de la section.
  const { ref: skillsRef, inView: skillsIsVisible } = useInView(options);
  const { ref: logosRef, inView: logosIsVisible } = useInView(options);

  return (
    <section className={skillsStyles.skillsContainer} id="skills">
      <h2
        className={`${skillsStyles.skillsTitle} ${
          skillsIsVisible ? skillsStyles.skillsAnimate : ""
        }`}
        ref={skillsRef}
  
      >
        Compétences
      </h2>
      <div className={skillsStyles.logosContainer} ref={logosRef}>
        <div className={`${skillsStyles.logosFrontend} ${logosIsVisible ? skillsStyles.logosFrontendAnimate : ""}`}>
          <Skill src={logoHTML} name={"HTML5"} alt={"logo de HTML"} />
          <Skill src={logoCSS} name={"CSS3"} alt={"logo de CSS"} />
          <Skill src={logoSass} name={"Sass"} alt={"logo de Sass"} />
          <Skill src={logoJS} name={"JavaScript"} alt={"logo de JavaScript"} />
          <Skill src={logoReact} name={"React.js"} alt={"logo de React.js"} />
        </div>
        <div className={`${skillsStyles.logosBackend} ${logosIsVisible ? skillsStyles.logosBackendAnimate : ""}`}>
          <Skill src={logoGitHub} name={"GitHub"} alt={"logo de GitHub"} className={skillsStyles.logoGitHub}/>
          <Skill src={logoExpress} name={"Express.js"} alt={"logo d'Express.js"} />
          <Skill src={logoNode} name={"Node.js"} alt={"logo de Node.js"} className={skillsStyles.logoNode}/>
          <Skill src={logoMongo} name={"MongoDB"} alt={"logo de MongoDB"} />
          <Skill src={logoPostman} name={"Postman"} alt={"logo de Postman"}/>
        </div>
      </div>
    </section>
  );
};

export default Skills;