// Le composant "Card" est visible dans la section "Projets" du site. Il permet l'affichage dynamique des données contenues dans le
// fichier projects.json, qui répertorie les informations relatives à chacun des projets de développement terminés.

import React from "react";
import cardStyles from "../styles/components/card.module.scss";
import DataFile from "../data/projects.json";

// La logique du composant commence par une méthode .map appliquée au fichier projects.json pour itérer sur chacun des objets
// qu'il contient

const Card = () => {
  return (
    <div className={cardStyles.cardContainer}>
      {DataFile.map((project) => (
        <div className={cardStyles.card}>
          {/* On prévoit deux éléments img : le premier est affiché sur les plus grandes résolutions puis caché sur les plus 
          petites résolutions. Le second est caché sur les plus grandes résolutions et affiché sur les plus petites résolutions.
          Le fichier .png chargé est différent dans les deux cas. */}
          <img
            className={cardStyles.cardImgDesktop}
            src={project.img.desktop}
            alt={project.title}
          />
          <img
            className={cardStyles.cardImgMobile}
            src={project.img.mobile}
            alt={project.title}
          />
          <div className={cardStyles.infos}>
            <h3 className={cardStyles.title}>{project.title}</h3>
            <p className={cardStyles.date}>{project.date}</p>
            <p className={cardStyles.details}>{project.infos}</p>
            <div className={cardStyles.buttonsContainer}>
              {/* On conditionne l'affichage du bouton "Site web" à la présence d'une valeur en face de la clé "site" du
              fichier projects.json (si aucune valeur n'est renseignée, le bouton ne s'affiche pas) */}
              <div
                className={
                  project.site === ""
                    ? cardStyles.hiddenButton
                    : cardStyles.buttonContainer
                }
              >
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={cardStyles.button}>Site web</span>
                </a>
              </div>
              {/* On conditionne l'affichage du bouton "Code source" à la présence d'une valeur en face de la clé "code" du
              fichier projects.json (si aucune valeur n'est renseignée, le bouton ne s'affiche pas) */}
              <div
                className={
                  project.code === ""
                    ? cardStyles.hiddenButton
                    : cardStyles.buttonContainer
                }
              >
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={cardStyles.button}>Code source</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;