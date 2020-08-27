import React from "react";
import EducationInfoItem from "./EducationInfoItem/EducationInfoItem";
import ProffesionalSkill from "./Skill/ProffesionalSkill";
import style from './EducationInfo.module.css'

const EducationInfo = ({education, skills}) => {
    let educationItems = education.map(item => <EducationInfoItem program={item.program} key={item.id}
                                                                  company={item.company} period={item.period}
                                                                  description={item.description}/>);
    let proffSkills = skills.map(skill => <ProffesionalSkill key={skill.id} name={skill.name}
                                                             iconUrl={skill.iconUrl}/>);
    return (
        <>
            <div className={style.educationInfo}>
                <h2>Education and Employment</h2>
                <hr/>
                <div className={style.educationItems}>
                    {educationItems}
                </div>
            </div>
            <div className={style.skillsInfo}>
                <h2>Skills</h2>
                <hr/>
                <div className={style.skillsItems}>
                    {proffSkills}
                </div>
            </div>
        </>
    )
}

export default EducationInfo;