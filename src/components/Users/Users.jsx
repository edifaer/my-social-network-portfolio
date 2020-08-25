import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
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