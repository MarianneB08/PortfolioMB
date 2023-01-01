import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import contactStyles from "../styles/components/contact.module.scss";
import Skill from "./Skill";
import logoLinkedin from "../assets/logo_Linkedin.svg";
import logoGitHub from "../assets/logo_GitHub.svg";

const Contact = () => {
  const [text, setText] = useState(false);

  const display = () => {
    setText(!text);
  };

  const options = {
    threshold: 0.1,
  };

  const { ref: contactRef, inView: contactIsVisible } = useInView(options);
  const { ref: logosRef, inView: logosIsVisible } = useInView(options);

  return (
    <section className={contactStyles.contactContainer} id="contact">
      <h2
        className={`${contactStyles.contactTitle} ${
          contactIsVisible ? contactStyles.contactAnimate : ""
        }`}
        ref={contactRef}
      >
        Contact
      </h2>
      <div className={contactStyles.socialMediaContainer} ref={logosRef}>
        <div
          className={`${
            logosIsVisible ? contactStyles.linkedinLogoAnimate : ""
          }`}
        >
          <a
            href={`https://www.linkedin.com/in/marianne-boyer-devfrontend/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Skill src={logoLinkedin} />
          </a>
        </div>
        <div
          className={`${logosIsVisible ? contactStyles.githubLogoAnimate : ""}`}
        >
          <a
            href={`https://github.com/MarianneB08`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Skill src={logoGitHub} />
          </a>
        </div>
      </div>
      <div className={contactStyles.emailAndSecretContainer} onClick={display}>
        <div className={contactStyles.emailContainer}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={contactStyles.emailIcon}
          />
          <a
            className={contactStyles.emailText}
            href="mailto:mboyer.correction.relecture@gmail.com"
          >
            mboyer.correction.relecture@gmail.com
          </a>
        </div>
        <div className={contactStyles.secretContainer}>
          {text && (
            <p className={contactStyles.secretText}>
              Excellente initiative ! 🤝
            </p>
          )}
        </div>
      </div>
      <div className={contactStyles.curriculumContainer}>Télécharger mon CV</div>
    </section>
  );
};

export default Contact;