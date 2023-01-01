import React from 'react';
import popupStyles from "../styles/components/popup.module.scss";

const Popup = ({trigger, setTrigger}) => {
    return (trigger) ? (
        <div className={popupStyles.popupContainer}>
            <div className={popupStyles.popupContent}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos voluptatum vel libero provident harum numquam dolores, nisi porro? Ex suscipit molestias fuga amet, iure nulla officia incidunt laboriosam similique?</p>
                <button className={popupStyles.closeButton} onClick={() => setTrigger(false)}>Fermer</button>
            </div>
        </div>
    ) : "";
};

export default Popup;