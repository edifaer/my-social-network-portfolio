import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.content}>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;