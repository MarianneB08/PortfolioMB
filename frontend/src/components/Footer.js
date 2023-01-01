import React, {useState} from "react";
import footerStyles from "../styles/components/footer.module.scss";
import Popup from "./Popup";

const Footer = () => {
const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerText}>
        <p>© Marianne Boyer - 2023</p>
        <p onClick={() => setButtonPopup(true)}>Mentions légales</p>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup</h3>
        <p>This is my button triggered popup</p>
      </Popup>
    </footer>
  );
};

export default Footer;
