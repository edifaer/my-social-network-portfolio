import React from "react";
import style from './EducationInfoItem.module.css';

const EducationInfoItem = ({program,company,period,description}) => {
    return (
        <div>
            <h3 className={style.headerProgram}>{program}</h3>
            <div className={style.company}>{company}</div>
            <div className={style.period}>{period}</div>
            <p className={style.description}>{description}</p>
        </div>
    );
}

export default EducationInfoItem;