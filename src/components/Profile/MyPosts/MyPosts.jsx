import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from "./AddPostForm/PostForm";

const MyPosts = React.memo(props => {
    let postElements = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostForm addPost={props.addPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

})

export default MyPosts;