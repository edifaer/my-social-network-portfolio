import Friends from "./Friends";
import {connect} from "react-redux";
import {searchFriends} from "../../redux/friends-reducer";

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (term) => {
            dispatch(searchFriends(term))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);