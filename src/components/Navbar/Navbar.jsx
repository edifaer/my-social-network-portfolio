import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({profile, headerImgUrl, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <>
            <header className={style.header}>
                <img src={headerImgUrl} alt="logo"/>
            </header>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to='/profile' activeClassName={style.activeLink}>Timeline</NavLink>
                </div>
                <div className={`${style.item} ${style.active}`}>
                    <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink>
                </div>
                <div className={style.personalData}>
                    <img src={profile.photos.large} alt="profilePhoto"/>
                    <label htmlFor="file-upload" className={style.customFileUpload}>
                        <FontAwesomeIcon icon={faCamera}/>
                    </label>
                    <input id="file-upload" type={'file'} onChange={onMainPhotoSelected}
                           className={style.changePhotoBtn}/>
                    <NavLink to="/profile">{profile.fullName}</NavLink>
                    <p>Lviv, Ukraine</p>
                </div>
                <div className={style.item}>
                    <NavLink to='/media' activeClassName={style.activeLink}>Media</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/about' activeClassName={style.activeLink}>About</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
                </div>
            </nav>
        </>);
}

export default Navbar;
