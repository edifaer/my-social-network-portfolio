import React from 'react';
import style from './HeaderContent.module.css';
import {faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const HeaderContent = (props) => {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                { props.isAuth ?
                         <button onClick={props.logout} className={style.logoutBtn}>
                             <FontAwesomeIcon icon={faSignOutAlt} size='lg'/> Log Out
                         </button>
                    : <NavLink to='/login'>
                        <button type='button' className={style.loginBtn}>
                            <FontAwesomeIcon icon={faSignInAlt} size='lg'/> Login
                        </button>
                    </NavLink>
                     }
            </div>
        </header>
    );
}

export default HeaderContent;