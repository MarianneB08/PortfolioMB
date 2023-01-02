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

  const { ref: trainingRef, inView: trainingIsVisible } = useInView(options);

  return (
    <section className={trainingStyles.aboutContainer} id="training">
      <h2
        className={`${trainingStyles.aboutTitle} ${
          trainingIsVisible ? trainingStyles.aboutAnimate : ""
        }`}
        ref={trainingRef}
      >
        Parcours
      </h2>

      <div className={trainingStyles.boxTimeline}>
        <div className={trainingStyles.ligne}></div>

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
        <div className={`${trainingStyles.rond} ${trainingStyles.r3}`}><FontAwesomeIcon
            icon={faBriefcase}
            className={trainingStyles.timelineIcon}
          /></div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r4}`}><FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          /></div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r5}`}><FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          /></div>
        <div className={`${trainingStyles.rond} ${trainingStyles.r6}`}><FontAwesomeIcon
            icon={faGraduationCap}
            className={trainingStyles.timelineIcon}
          /></div>

        <div className={`${trainingStyles.box} ${trainingStyles.b1}`}>
          <h2>2022 - OpenClassrooms</h2>
          <p>
            Formation « Développement web », réalisation de 7 projets
            professionnalisants sur la base des techniques suivantes :
            <ul>
              <li>HTML, CSS (Sass), JavaScript</li>
              <li>React.js</li>
              <li>Node.js, Express, MongoDB</li>
            </ul>
          </p>
        </div>
        <div className={`${trainingStyles.box} ${trainingStyles.b2}`}>
          <h2>2016-2022 — Kartable</h2>
          <p>
            Responsable de la correction - pôle éditorial
            <ul>
              <li>Relecture et correction ortho-typographique de l’ensemble des contenus pédagogiques</li>
              <li>Vérification des e-mailings</li>
              <li>Optimisation du wording du site web</li>
              <li>Correction des ouvrages print publiés en collaboration avec les éditions parascolaires Ellipses</li>
            </ul>
          </p>
        </div>
        <div className={`${trainingStyles.box} ${trainingStyles.b3}`}>
          <h2>2014-2016 - Éditions J'ai lu (Flammarion)</h2>
          <p>
            Réécriture et correction de romans érotiques traduits de l'anglo-saxon
          </p>
        </div>
        <div className={`${trainingStyles.box} ${trainingStyles.b4}`}>
          <h2>2012-2013 - Paris-Sorbonne Paris-IV</h2>
          <p>
            Master 2 mention « Littérature, philologie et linguistique », spécialité Langue française 
            <ul>
              <li>Mémoire de recherche : « Analyse psycholinguistique de l'activité de copie »</li>
            </ul>
          </p>
        </div>
        <div className={`${trainingStyles.box} ${trainingStyles.b5}`}>
          <h2>2011-2012 - Centre d'Écriture et de Communication (CEC)</h2>
          <p>
            Formation au métier de correcteur
          </p>
        </div>
        <div className={`${trainingStyles.box} ${trainingStyles.b6}`}>
          <h2>2010-2011 - Paris-Sorbonne Paris-IV</h2>
          <p>
            Master 1 de Lettres modernes appliquées, option Édition 
            <ul>
              <li>Mémoire de recherche : « Sémiologie de la ponctuation »</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;
