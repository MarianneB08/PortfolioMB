import React from 'react';
import skillStyle from '../styles/components/skill.module.scss';

const Skill = ({text, src, alt}) => {
    return (
        <div className={skillStyle.logoContainer}>
            <p>{text}</p>
            <img className={skillStyle.img} src={src} alt={alt}/>
        </div>
    );
};

export default Skill;