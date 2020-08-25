export const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (values.email.length > 35) {
        errors.email = 'Must be 35 characters or less';
    }
    if (!values.password) {
        errors.password = 'Required'}
    // } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)) {
    //     errors.password = 'Invalid password';
    // }

    if(!values.captcha) {
        errors.captcha = 'Required'
    }

    return errors;
}
