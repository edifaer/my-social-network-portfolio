import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";

let User = ({user, followingInProgress, unfollow, follow}) => {
    const defaultStatus = 'There may be some status';
    return (
        <div className={styles.user}>
            <div className={styles.userInfo}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                     className={styles.userPhoto} alt='userPhoto'/>
                <div>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userStatus}>{user.status || defaultStatus}</div>
                </div>
            </div>
            <div className={styles.userBtn}>
                {user.followed
                    ? <button className={styles.unfollowBtn}
                              disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button>
                    : <button className={styles.followBtn}
                              disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</button>}
            </div>
        </div>)
}

export default User;