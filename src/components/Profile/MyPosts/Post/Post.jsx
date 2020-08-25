import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'/>
            </div>
            <div>
                <p> {props.message}</p>
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;