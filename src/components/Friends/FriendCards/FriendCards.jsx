import React from "react";
import Card from "./Card/Card";
import style from './FriendCards.module.css'

const FriendCards = ({data}) => {
    let cardElements = data.map(el => <Card headerImg={el.headerImg} photo={el.friendPhoto} name={el.friendName}
                                                  country={el.country} friends={el.friendsCount} photos={el.photosCount}
                                                  videos={el.videosCount}/>)
    return (
        <div className={style.wrapperCards}>
            {cardElements}
        </div>
    );
}

export default FriendCards;