import React from 'react';
import s from './Post.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faHeart} from "@fortawesome/free-solid-svg-icons";

const Post = ({profile, message, likesCount, datePublished, postPhoto, commentsCount}) => {
    return (
        <div className={s.postContainer}>
            <div className={s.postHeader}>
                <div className={s.profileImg}>
                    <img src={profile.photos.large}/>
                </div>
                <div>
                    <p>{profile.fullName}</p>
                    <span>Published: {datePublished}</span>
                </div>
            </div>
            <div className={s.postContent}>
                {postPhoto && <img src={postPhoto} alt='postPhoto'/>}
                <p> {message}</p>
                <hr/>
            </div>
            <div className={s.postReviews}>
                <div className={s.postLikes}>
                    <label>
                        <FontAwesomeIcon icon={faHeart} size='lg'/>
                    </label>
                    <span>{likesCount}</span>
                </div>
                <div className={s.postLikes}>
                    <label>
                        <FontAwesomeIcon icon={faComments} size='lg'/>
                    </label>
                    <span>{commentsCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;