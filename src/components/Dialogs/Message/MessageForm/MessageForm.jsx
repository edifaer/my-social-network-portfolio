import React from "react";
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>)
}

const MessageFormRedux = reduxForm({form: "dialogMessageForm"})(MessageForm);


const AddMesageForm = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return <MessageFormRedux onSubmit={addNewMessage}/>
}

export default AddMesageForm;