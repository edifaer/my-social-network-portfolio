import React from 'react';
import HeaderContent from "./HeaderContent";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContentContainer extends React.Component {


    render() {
        return <HeaderContent {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContentContainer);