import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import AsideContainer from "./Aside/AsideContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Profile = () => {
    return (
        <div className={style.content}>
            <MyPostsContainer/>
            <AsideContainer/>
            <SidebarContainer/>
        </div>
    );
}

export default Profile;