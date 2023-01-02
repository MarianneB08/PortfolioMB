import React from 'react';
import skillStyle from '../styles/components/skill.module.scss';

const Skill = ({src, alt}) => {
    return (
        <div className={skillStyle.logoContainer}>
    
            <img className={skillStyle.img} src={src} alt={alt}/>
        </div>
    );
};

export default Skill;