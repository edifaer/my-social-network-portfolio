import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMesageForm from "./Message/MessageForm/MessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={s.dialog__messages}>
                <div>{messagesElements}</div>
                <AddMesageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;