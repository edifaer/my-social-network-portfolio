import React from "react";
import {connect} from "react-redux";
import FriendCards from "./FriendCards";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        data: state.friendsPage.friendCardData.filter(friend => {
            return friend.friendName.toLowerCase().indexOf(state.friendsPage.term.toLowerCase()) > -1
        })
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect,
)(FriendCards);