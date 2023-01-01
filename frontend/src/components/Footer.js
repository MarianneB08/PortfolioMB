import React, {useState} from "react";
import footerStyles from "../styles/components/footer.module.scss";
import Popup from "./Popup";

const Footer = () => {
const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerText}>
        <p>© Marianne Boyer - 2023</p>
        <p onClick={() => setButtonPopup(true)} className={footerStyles.footerLink}>Mentions légales</p>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </footer>
  );
};

export default Footer;
