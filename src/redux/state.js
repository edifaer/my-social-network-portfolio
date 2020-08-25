import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                {message: 'Hi. How are you?', likesCount: '1'},
                {message: 'My first page', likesCount: '22'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andre'},
                {id: 3, name: 'Sas'},
                {id: 4, name: 'Vas'},
                {id: 5, name: 'Kost'},
                {id: 6, name: 'Kol'},
            ],
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Hello!'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'Kostia!'},
            ],
            newMessageBody: ''
        },
        friendsPage: {
            friendCardData: [
                {
                    id: 1,
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend1.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar1.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                },
                {
                    id: 2,
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend2.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar2.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                },
                {
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend3.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar3.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                }, {
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend4.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar4.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                }, {
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend5.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar5.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                }, {
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend6.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar6.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                }, {
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend7.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar7.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                }, {
                    headerImg: 'https://html.crumina.net/html-olympus/img/friend8.jpg',
                    friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar8.jpg',
                    friendName: 'Nicholas Grissom',
                    country: 'San Francisco, CA',
                    friendsCount: 52,
                    photosCount: 240,
                    videosCount: 16
                },
            ]
        }
    },

    _callSubscriber() {
        alert('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
