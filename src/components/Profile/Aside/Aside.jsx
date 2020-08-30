import React from 'react';
import style from './Aside.module.css'
import s from "../../About/ProfileInfo/ProfileInfo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Preloader from "../../common/Preloader/Preloader";
import {
    faAtom,
    faBicycle, faBook,
    faDesktop,
    faDotCircle,
    faHeartbeat, faHourglass,
    faMicrochip, faPlay,
    faPodcast
} from "@fortawesome/free-solid-svg-icons";
import AudioModalWindow from "./AudioModal/AudioModal";

function Aside({profile, audioPlaylist, isOpenAudioModal, openAudioModal}) {
    if (!profile) {
        return <Preloader/>
    }
    const badges = [faDiscord, faPodcast, faMicrochip, faBicycle, faDesktop,
        faBook, faAtom, faDotCircle, faHeartbeat, faHourglass];

    return (
        <aside className={style.aside}>
            {isOpenAudioModal &&
            <AudioModalWindow playlist={audioPlaylist} closeAudioModal={openAudioModal}/>
            }
            <div className={style.socialContacts}>
                <h3>Social Networks</h3>
                <hr/>
                <div className={style.socialLinks}>
                    <a href={profile.contacts.facebook} className={`${s.contactBtn} ${s.facebookBtn}`}
                       target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size='lg'/><span>Facebook</span>
                    </a>
                    <a href={profile.contacts.website} className={`${s.contactBtn} ${s.linkedinBtn}`}
                       target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size='lg'/><span>LinkedIn</span>
                    </a>
                    <a href={profile.contacts.github} className={s.contactBtn}
                       target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='lg'/><span>Github</span>
                    </a>
                </div>
            </div>
            <div className={style.audioPlaylist}>
                <h3>My SoundCloud PlayList</h3>
                <hr/>
                <ul className={style.audioList}>
                    {audioPlaylist.map(audio => {
                        return (
                            <li key={audio.id}>
                                <div className={style.songHeader}>
                                    <button className={style.songImg} onClick={openAudioModal}>
                                        <img src={audio.songImage} alt='songImage'/>
                                        <div className={style.playBtn}>
                                            <FontAwesomeIcon icon={faPlay}  size='lg'/>
                                        </div>
                                    </button>
                                    <div className={style.songText}>
                                        <h4>{audio.title}</h4>
                                        <span>{audio.singer}</span>
                                    </div>
                                </div>
                                <p className={style.audioDuration}>{audio.duration}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.badgesContent}>
                <h3>Kostia`s Badges</h3>
                <hr/>
                <div className={style.badges}>
                    {badges.map((badge, index) => {
                        return (
                            <label className={style.badge} key={index}>
                                <FontAwesomeIcon icon={badge} size='lg'/>
                            </label>
                        )
                    })}
                </div>
            </div>
        </aside>
    );
}

export default Aside;