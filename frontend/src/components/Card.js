import React from "react";
import cardStyles from "../styles/components/card.module.scss";
import DataFile from "../data/projects.json";

const Card = () => {
  return (
    <div className={cardStyles.cardContainer}>
      {DataFile.map((project) => (
        <div className={cardStyles.card}>
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