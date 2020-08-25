import React from "react";
import s from './About.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const About = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
        </div>
    );
}

export default About;