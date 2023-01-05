// Le composant "Home" correspond à la section "Marianne Boyer - Portfolio" du site.
// On utilise intersection-observer pour gérer le déclenchement d'animations au scroll.

import React from "react";
import { useInView } from "react-intersection-observer";
import homeStyles from "../styles/components/home.module.scss";
import photo from "../assets/photo.jpg";

const Home = () => {
  const options = {
    threshold: 0.3
  }

  // On définit plusieurs ancrages avec le hook useInView pour déclencher des animations au scroll à différents endroits de la section.
  const { ref: homeRef, inView: homeIsVisible } = useInView(options);
  const { ref: imgRef, inView: imgIsVisible } = useInView(options);

  return (
    <section className={homeStyles.homeContainer} id="home">
      <h1
        className={`${homeStyles.homeTitle} ${
          homeIsVisible ? homeStyles.titleAnimate : ""
        }`}
        ref={homeRef}
      >
        Marianne Boyer<br/>Portfolio
      </h1>
      <div className={homeStyles.homeWrapper}>
        <div className={homeStyles.textContainerLeft}>
          <p>
            Après 8 années consacrées à la correction-relecture, d'abord dans l'édition généraliste puis pour un site de soutien scolaire, 
            j'ai fini par répondre à l'appel du web en me lançant dans une formation de développement web en 2022. Internet étant désormais un lieu de vie incontournable pour la chose écrite, cette évolution était logique et nécessaire.
          </p>
        </div>
        <img
          ref={imgRef}
          src={photo}
          alt="Portrait Marianne Boyer"
          className={`${homeStyles.img}
          ${imgIsVisible ? homeStyles.animateImg : ''}`}
        />
        <div className={homeStyles.textContainerRight}>
          <p>
            Si le développement est devenu en&nbsp;2022 mon nouveau métier, mes compétences en correction restent d'actualité et je suis heureuse de pouvoir continuer à les mettre en œuvre chaque jour depuis que je développe des lignes de code. Ces deux métiers s'enrichissent mutuellement, et j'ai hâte de vous montrer le résultat de cette alchimie&nbsp;!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;