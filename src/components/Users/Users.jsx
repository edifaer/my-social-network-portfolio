import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div className={styles.usersPage}>
        <div>
            {
                users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}
                    />
                )
            }
        </div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
                   pageSize={pageSize} onPageChanged={onPageChanged}/>
    </div>
}

export default Users;