import React from "react";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component="textarea" placeholder="IT-kamasutra"/>
            </div>
            <div>
                <button>Add post</button>
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