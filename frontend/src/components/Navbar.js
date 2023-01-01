import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import navbarStyles from "../styles/components/navbar.module.scss";
import { Link as NavLink } from "react-scroll";

const Navbar = () => {
  return (
    <header className={navbarStyles.headerContainer}>
      <nav className={navbarStyles.navbarContainer}>
        <NavLink
          className={navbarStyles.navbarItem}
          activeClass={navbarStyles.active}
          spy={true}
          to="home"
        >
          <FontAwesomeIcon icon={faHouse} className={navbarStyles.navbarIcon} />
          <p className={navbarStyles.navbarText}>Accueil</p>
        </NavLink>
        <NavLink
          className={navbarStyles.navbarItem}
          activeClass={navbarStyles.active}
          spy={true}
          offset={-95}
          to="about"
        >
          <FontAwesomeIcon
            icon={faCircleUser}
            className={navbarStyles.navbarIcon}
          />
          <p className={navbarStyles.navbarText}>À propos</p>
        </NavLink>
        <NavLink
          className={navbarStyles.navbarItem}
          activeClass={navbarStyles.active}
          spy={true}
          offset={-125}
          to="skills"
        >
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className={navbarStyles.navbarIcon}
          />
          <p className={navbarStyles.navbarText}>Compétences</p>
        </NavLink>
        <NavLink
          className={navbarStyles.navbarItem}
          activeClass={navbarStyles.active}
          spy={true}
          offset={-120}
          to="work"
        >
          <FontAwesomeIcon
            icon={faClipboardCheck}
            className={navbarStyles.navbarIcon}
          />
          <p className={navbarStyles.navbarText}>Projets</p>
        </NavLink>
        <NavLink
          className={navbarStyles.navbarItem}
          activeClass={navbarStyles.active}
          spy={true}
          offset={-150}
          to="contact"
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={navbarStyles.navbarIcon}
          />
          <p className={navbarStyles.navbarText}>Contact</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;