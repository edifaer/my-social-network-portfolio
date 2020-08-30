import React from "react";
import ReactPlayer from "react-player";
import style from './AudioModal.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

const AudioModalWindow = ({playlist, closeAudioModal}) => {
    return (
        <div className={style.modalContainer}>
            <button onClick={closeAudioModal}>
                <FontAwesomeIcon icon={faWindowClose} size='3x'/>
            </button>
            <ul>
                {playlist.map(item => {
                    return (
                        <li key={item.id}>
                            <ReactPlayer url={item.link}
                                         width={600} height={130}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AudioModalWindow;
