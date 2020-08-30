import {connect} from "react-redux";
import Aside from "./Aside";
import {openAudioModal} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        audioPlaylist: state.profilePage.audioData,
        isOpenAudioModal: state.profilePage.isOpenAudioModal
    }
}

const AsideContainer = connect(mapStateToProps, {openAudioModal})(Aside);

export default AsideContainer;