import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEdit,} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.profileInfo}>
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {
                    setEditMode(true)
                }} profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}/>
            }

        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return <div>
        <div className={s.headerPersonalInfo}>
            <h2>Personal Information</h2>
            {isOwner && <div>
                <button onClick={goToEditMode} className={s.editBtn}>
                    <FontAwesomeIcon icon={faEdit} size='lg'/>
                </button>
            </div>}
        </div>
        <hr/>
        <div className={s.personalInfoContent}>
            <div className={s.infoField}>
                <div>Full name:</div>
                <span>{profile.fullName}</span>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            <div className={s.infoField}>
                <div>About me:</div>
                <span>{profile.aboutMe}</span>
            </div>
            <div className={s.infoField}>
                <div>Looking for a job:</div>
                {profile.lookingForAJob ? <span>Yes</span> : <span>No</span>}
            </div>
            {profile.lookingForAJob &&
            <div className={s.infoField}>
                <div>Email:</div>
                <span>{profile.lookingForAJobDescription}</span>
            </div>
            }
            <div>
                <div className={s.socialNetworksHeader}>Social Networks:</div>
                <a href={profile.contacts.github} className={s.contactBtn}
                   target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='lg'/><span>Github</span>
                </a>
                <a href={profile.contacts.facebook} className={`${s.contactBtn} ${s.facebookBtn}`}
                   target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size='lg'/><span>Facebook</span>
                </a>
                <a href={profile.contacts.instagram} className={`${s.contactBtn} ${s.instagramBtn}`}
                   target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size='lg'/><span>Instagram</span>
                </a>
                <a href={profile.contacts.website} className={`${s.contactBtn} ${s.linkedinBtn}`}
                   target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size='lg'/><span>LinkedIn</span>
                </a>
                <a href={profile.contacts.mainLink} className={`${s.contactBtn} ${s.codeWarsBtn}`}
                   target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCode} size='lg'/><span>CodeWars</span>
                </a>
            </div>
        </div>
    </div>
}

export default ProfileInfo;