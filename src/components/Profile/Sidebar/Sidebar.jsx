import React from 'react';
import style from './Sidebar.module.css'
import ReactPlayer from "react-player";

const Sidebar = ({friends}) => {
    let friendsList = friends.map(friend=>{
        return (
            <li className={style.friendItem} key={friend.id}>
                <img src={friend.friendPhoto}/>
                <p>{friend.friendName}</p>
                <span>{friend.country}</span>
            </li>
        )
    })

    return (
    <section className={style.sidebar}>
        <div className={style.friendsSidebar}>
            <h3>Friends</h3>
            <hr/>
            <div className={style.friendsList}>
                <ul>
                    {friendsList}
                </ul>
            </div>
        </div>
    </section>
    );
}

export default Sidebar;