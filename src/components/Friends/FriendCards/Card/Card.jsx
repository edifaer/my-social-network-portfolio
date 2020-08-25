import React from "react";
import style from './Card.module.css'
import Slider from "./CarouselSlider/CarouselSlider";

const Card = (props) => {
        return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <img src={props.headerImg}/>
            </div>
            <div className={style.cardContent}>
                <div className={style.cardContent_avatar}>
                    <div className={style.authorThumb}>
                        <img src={props.photo} alt='logo'/>
                    </div>
                    <div className={style.authorContent}>
                        <a href='#'>{props.name}</a>
                    </div>
                    <div className={style.country}>{props.country}</div>
                </div>
                <div className={style.cardContent_count}>
                    <a href='#'>
                        <div className={style.h6}>{props.friends}</div>
                        <div className={style.title}>Friends</div>
                    </a>
                    <a href='#'>
                        <div className={style.h6}>{props.photos}</div>
                        <div className={style.title}>Photos</div>
                    </a>
                    <a href='#'>
                        <div className={style.h6}>{props.videos}</div>
                        <div className={style.title}>Videos</div>
                    </a>
                </div>
                <Slider/>
            </div>
        </div>
    );
}

export default Card;