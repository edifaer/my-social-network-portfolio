import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from "./AddPostForm/PostForm";
import Preloader from "../../common/Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

const MyPosts = React.memo(props => {
    if (!props.profile) {
        return <Preloader/>
    }

    let postElements = props.posts.map((p, index) => <Post key={index} profile={props.profile} commentsCount={p.commentsCount}
                                                           message={p.message} likesCount={p.likesCount}
                                                           datePublished={p.datePublished}
                                                           postPhoto={p.photo}/>).reverse();

    const handleChange = (event) => {
        props.addPhotoToPost(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.addPostForm}>
                <div className={s.formImg}>
                    <img src={props.profile.photos.large} alt="myPhoto"/>
                </div>
                <PostForm addPost={props.addPost} addPhotoToPost={props.addPhotoToPost}/>
                <div className={s.postPhotoContainer}>
                    <label htmlFor="post-photo" className={s.postPhotoUpload}>
                        <FontAwesomeIcon icon={faImage} size='2x'/>
                    </label>
                    <input id='post-photo' type={"file"} onChange={handleChange} />
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

})

export default MyPosts;