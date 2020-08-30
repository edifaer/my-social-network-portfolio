import React from "react";
import {Field, reduxForm} from "redux-form";
import style from '../MyPosts.module.css'

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className={style.postInput}>
                <Field name='newPostText' component="textarea" placeholder='write something' cols='62' rows='6'/>
            </div>
            <div className={style.postBtn}>
                <button>Publish</button>
            </div>
        </form>)
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const PostForm = (props) => {
    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <AddNewPostFormRedux onSubmit={onAddPost}/>
}

export default PostForm;