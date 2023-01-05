// Le composant "Skill" permet l'affichage de chacun des logos de la stack affichée dans la section "Compétences" du site.
// Son contenu peut varier grâce aux props qui lui sont passées depuis le composant parent "Skills".

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