import React from 'react';
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    saveProfile,
    setUserProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import About from "./About";

class AboutContainer extends React.Component {
    refreshAboutInfo() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshAboutInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshAboutInfo();
        }
    }

    render() {
        return (
            <About {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     education={this.props.education}
                     skills={this.props.skills}
                    />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    education: state.aboutPage.education,
    skills: state.aboutPage.skills,
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus, saveProfile}),
    withRouter,
)(AboutContainer);


