import React from "react";
import style from './Friends.module.css'
import SearchPannel from "./SearchPannel/SearchPannel";
import FriendCardsContainer from "./FriendCards/FriendCardsContainer";

const Friends = ({friendsPage,onSearchChange}) => {
    return (
        <div className={style.content}>
            <SearchPannel onSearchChange={onSearchChange} friends={friendsPage}/>
            <FriendCardsContainer />
        </div>
    );
}

export default Friends;