import React from "react";
import style from './About.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import EducationInfo from "./EducationInfo/EducationInfo";
import Preloader from "../common/Preloader/Preloader";

const About = ({isOwner, profile, status, saveProfile, updateStatus, education, skills}) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div className={style.container}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                saveProfile={saveProfile}
                updateStatus={updateStatus}/>
            <EducationInfo education={education} skills={skills}/>
        </div>
    );
}

export default About;