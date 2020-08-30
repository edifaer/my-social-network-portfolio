import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const ADD_PHOTO_TO_POST = 'ADD_PHOTO_TO_POST';
const OPEN_AUDIO_MODAL = 'OPEN_AUDIO_MODAL';

let initialState = {
    postData: [
        {
            id: 1,
            message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
                'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                'officia deserunt mollit anim id est laborum.',
            likesCount: '1',
            commentsCount: '17',
            datePublished: 'June,2 2020 19:30',
            photo: 'https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg'
        },
        {
            id: 2,
            message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Officia deserunt mollit anim id est laborum.',
            likesCount: '22', commentsCount: '9', datePublished: 'August,6 2020 9:15', photo: null
        }
    ],
    audioData: [
        {id:1, title: 'Dusk Till Dawn', singer: 'Zayn feat Sia', duration: '3:44',
            songImage: 'https://i1.sndcdn.com/artworks-000242585307-al4dji-t500x500.jpg',
            link: 'https://soundcloud.com/sudeep-shakya-6/zayn-malik-dusk-till-dawn-1'},
        {id:2, title: 'Uncover', singer: 'Zara Larson', duration: '3:34',
            songImage: 'https://i1.sndcdn.com/artworks-000096703691-ijnrms-t500x500.jpg',
            link: 'https://soundcloud.com/macktenstockholm/zara-larsson-uncover'},
        {id:3, title: 'Treat You Better', singer: 'Shawn Mendes', duration: '3:01',
            songImage: 'https://i1.sndcdn.com/artworks-000235495157-77jk6d-t500x500.jpg',
            link: 'https://soundcloud.com/danielesorrentino/shawn-mendes-treat-you-better'},
        {id:4, title: 'Nirvana', singer: 'Sam Smith', duration: '3:22',
            songImage: 'https://i1.sndcdn.com/artworks-000055878505-02mlio-t500x500.jpg',
            link: 'https://soundcloud.com/pmrrecords/sam-smith-nirvana-2'},
        {id:5, title: 'Demons', singer: 'Joji', duration: '2:57',
            songImage: 'https://i1.sndcdn.com/artworks-000253287824-ohoygo-t500x500.jpg',
            link: 'https://soundcloud.com/mac-plays/joji-demons'},


    ],
    postPhoto: null,
    profile: null,
    headerImgUrl: 'https://html.crumina.net/html-olympus/img/top-header1.jpg',
    status: '',
    isOpenAudioModal: false
};

const profileReducer = (state = initialState, action) => {
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
                comentsCount: 0,
                datePublished: monthNames[today.getMonth()] + ',' + today.getDate() + ' ' +
                    today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes(),
                photo: state.postPhoto
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                postPhoto: null,
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        case ADD_PHOTO_TO_POST: {
            return {
                ...state,
                postPhoto: action.file
            }
        }

        case OPEN_AUDIO_MODAL: {
            return {
                ...state,
                isOpenAudioModal: !state.isOpenAudioModal
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const addPhotoToPost = (file) => ({type: ADD_PHOTO_TO_POST, file})
export const openAudioModal = () => ({type:OPEN_AUDIO_MODAL});

export const getUserProfile = (userId) => async dispatch => {
    let data = await usersAPI.getProfileUser(userId);

    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async dispatch => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;