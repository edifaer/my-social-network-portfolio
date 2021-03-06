import React, {useEffect, useState} from "react";
import style from './ProfileInfo.module.css'
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        if(props.isOwner) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div className={s.infoField}>
                <div>Status: <span className={style.statusHelpMessage}>(Double click to change status)</span></div>
                <span onDoubleClick={activateEditMode} className={style.statusMessage}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;