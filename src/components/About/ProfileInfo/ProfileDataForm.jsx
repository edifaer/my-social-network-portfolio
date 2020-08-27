import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControlsCreator";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";

const ProfileDataForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={style.formContainer}>
            <div>
                <button className={style.saveBtn}><FontAwesomeIcon icon={faSave} size='lg'/><span>Save</span></button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <label><span>Full name:</span>
                    {createField("Full name", "fullName", [], Input)}
                </label>
            </div>
            <div>
                <label><span>About me:</span>
                    {createField("About me", "aboutMe", [], Textarea)}
                </label>
            </div>
            <div>
                <label><span>Looking for a job:</span>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </label>
            </div>
            <div>
                <label><span>Github:</span>
                    {createField("GitHub", "contacts.github", [], Input)}
                </label>
            </div>
            <div>
                <label><span>Facebook:</span>
                    {createField("Facebook", "contacts.facebook", [], Input)}
                </label>
            </div>
            <div>
                <label><span>Instagram:</span>
                    {createField("Instagram", "contacts.instagram", [], Input)}
                </label>
            </div>
            <div>
                <label><span>LinkedIn:</span>
                    {createField("LinkedIn", "contacts.website", [], Input)}
                </label>
            </div>
            <div>
                <label><span>CodeWars:</span>
                    {createField("CodeWars", "contacts.mainLink", [], Input)}
                </label>
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;