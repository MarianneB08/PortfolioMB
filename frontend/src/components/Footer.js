import React from "react";
import footerStyles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerText}>
        <p>Marianne Boyer - 2023</p>
        <p>Mentions légales</p>
      </div>
    </footer>
  );
};

export default Footer;
