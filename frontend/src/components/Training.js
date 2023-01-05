// Le composant "Training" correspond à la section "Parcours" du site. Il contient l'ensemble des formations 
// et des expériences professionnelles.
// On utilise intersection-observer pour gérer le déclenchement d'animations au scroll.

import React from "react";
import { useInView } from "react-intersection-observer";
import trainingStyles from "../styles/components/training.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Training = () => {
  const options = {
    threshold: 0.1,
  };

  // On définit plusieurs ancrages avec le hook useInView pour déclencher des animations au scroll à différents endroits de la section.
  const { ref: trainingRef, inView: trainingIsVisible } = useInView(options);
  const { ref: boxOneRef, inView: boxOneIsVisible } = useInView(options);
  const { ref: boxTwoRef, inView: boxTwoIsVisible } = useInView(options);
  const { ref: boxThreeRef, inView: boxThreeIsVisible } = useInView(options);
  const { ref: boxFourRef, inView: boxFourIsVisible } = useInView(options);
  const { ref: boxFiveRef, inView: boxFiveIsVisible } = useInView(options);
  const { ref: boxSixRef, inView: boxSixIsVisible } = useInView(options);

  return (
    <section className={trainingStyles.trainingContainer} id="training">
      <h2
        className={`${trainingStyles.trainingTitle} ${
          trainingIsVisible ? trainingStyles.trainingAnimate : ""
        }`}
        ref={trainingRef}
      >
        Parcours
      </h2>
      
      <div className={trainingStyles.boxTimeline}>
        {/* Mise en place de la ligne centrale de la timeline */}
        <div className={trainingStyles.ligne}></div>

        {/* Mise en place des icônes formation/expérience professionnelle */}
        <div className={`${trainingStyles.rond} ${trainingStyles.r1}`}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          />
        </div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r2}`}>
          <FontAwesomeIcon
            icon={faBriefcase}
            className={trainingStyles.timelineIcon}
          />
        </div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r3}`}>
          <FontAwesomeIcon
            icon={faBriefcase}
            className={trainingStyles.timelineIcon}
          />
        </div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r4}`}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          />
        </div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r5}`}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          />
        </div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r6}`}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          />
        </div>

        {/* Mise en place des cards qui décrivent chaque formation/expérience professionnelle avec animation au scroll */}
        <div
          ref={boxOneRef}
          className={`${trainingStyles.box} ${trainingStyles.b1} ${
            boxOneIsVisible ? trainingStyles.boxAnimate : ""
          }`}
        >
          <h2>2022&nbsp;- OpenClassrooms</h2>
          <p>
            Formation «&nbsp;Développement web&nbsp;», réalisation de 7&nbsp;projets
            professionnalisants sur la base des techniques suivantes&nbsp;:
            <ul>
              <li>HTML, CSS (Sass), JavaScript</li>
              <li>React.js</li>
              <li>Node.js, Express, MongoDB</li>
            </ul>
          </p>
        </div>
        <div
          ref={boxTwoRef}
          className={`${trainingStyles.box} ${trainingStyles.b2} ${
            boxTwoIsVisible ? trainingStyles.boxAnimate : ""
          }`}
        >
          <h2>2016-2022&nbsp;— Kartable</h2>
          <p>
            Responsable de la correction&nbsp;- pôle éditorial
            <ul>
              <li>
                Relecture et correction ortho-typographique de l’ensemble des
                contenus pédagogiques
              </li>
              <li>Vérification des e-mailings</li>
              <li>Optimisation du wording du site web</li>
              <li>
                Correction des ouvrages print publiés aux éditions Ellipses
              </li>
            </ul>
          </p>
        </div>
        <div ref={boxThreeRef} className={`${trainingStyles.box} ${trainingStyles.b3} ${
            boxThreeIsVisible ? trainingStyles.boxAnimate : ""
          }`}>
          <h2>2014-2016&nbsp;- Éditions J'ai&nbsp;lu (Flammarion)</h2>
          <p>
            Réécriture et correction de romans érotiques traduits de
            l'anglo-saxon
          </p>
        </div>
        <div ref={boxFourRef} className={`${trainingStyles.box} ${trainingStyles.b4} ${
            boxFourIsVisible ? trainingStyles.boxAnimate : ""
          }`}>
          <h2>2012-2013&nbsp;- Paris-Sorbonne Paris-IV</h2>
          <p>
            Master 2 mention «&nbsp;Littérature, philologie et linguistique&nbsp;»,
            spécialité Langue française
            <ul>
              <li>
                Mémoire de recherche&nbsp;: «&nbsp;Analyse psycholinguistique de
                l'activité de copie&nbsp;»
              </li>
            </ul>
          </p>
        </div>
        <div ref={boxFiveRef} className={`${trainingStyles.box} ${trainingStyles.b5} ${
            boxFiveIsVisible ? trainingStyles.boxAnimate : ""
          }`}>
          <h2>2011-2012&nbsp;- Centre d'Écriture et de Communication (CEC)</h2>
          <p>Formation au métier de correcteur</p>
        </div>
        <div ref={boxSixRef} className={`${trainingStyles.box} ${trainingStyles.b6} ${
            boxSixIsVisible ? trainingStyles.boxAnimate : ""
          }`}>
          <h2>2010-2011&nbsp;- Paris-Sorbonne Paris-IV</h2>
          <p>
            Master 1 de Lettres modernes appliquées, option Édition
            <ul>
              <li>Mémoire de recherche&nbsp;: «&nbsp;Sémiologie de la ponctuation&nbsp;»</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;
