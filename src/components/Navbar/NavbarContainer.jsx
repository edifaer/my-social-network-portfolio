import React from 'react';
import {connect} from "react-redux";
import {
    getUserProfile,
    savePhoto,
} from "../../redux/profile-reducer";
import {compose} from "redux";
import Navbar from "./Navbar";
import {withRouter} from "react-router-dom";

class NavbarContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.authorizedUserId;

        if (!userId) {
            this.props.history.push("/login");
        }

        this.props.getUserProfile(userId);
    }

    render() {
        let {profile,headerImgUrl, savePhoto} = this.props;
        return (
            <Navbar {...this.props}
                    profile={profile}
                    headerImgUrl={headerImgUrl}
                    savePhoto={savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    headerImgUrl: state.profilePage.headerImgUrl,
    authorizedUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getUserProfile, savePhoto}),
    withRouter
)(NavbarContainer);


