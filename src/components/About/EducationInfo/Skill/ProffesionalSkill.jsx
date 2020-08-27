import React from "react";
import style from './ProfessionalSkill.module.css'

const ProffesionalSkill = ({name,iconUrl}) => {
    return (
        <div className={style.skillInfo}>
            <img src={iconUrl} alt='skillImg'/>
            <div>{name}</div>
        </div>
    );
}

export default ProffesionalSkill;