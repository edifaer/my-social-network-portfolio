import React from "react";
import s from './FormsControls.module.css'

const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + ( hasError ? s.error : "")}>
            <input {...input} placeholder={label} type={type} className={s.loginInput}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}

export default renderField;