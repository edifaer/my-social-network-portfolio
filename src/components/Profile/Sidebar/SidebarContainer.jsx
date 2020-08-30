import Sidebar from "./Sidebar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friendCardData
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;