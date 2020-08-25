const SEARCH_FRIENDS = "SEARCH_FRIENDS";


let initialState = {
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
            friendName: 'Marine Valentine',
            country: 'Long Island, NY',
            friendsCount: 52,
            photosCount: 240,
            videosCount: 16
        },
        {
            headerImg: 'https://html.crumina.net/html-olympus/img/friend3.jpg',
            friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar3.jpg',
            friendName: 'Nicholas Grissom',
            country: 'Los Angeles, CA',
            friendsCount: 52,
            photosCount: 240,
            videosCount: 16
        }, {
            headerImg: 'https://html.crumina.net/html-olympus/img/friend4.jpg',
            friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar4.jpg',
            friendName: 'Chris Greyson',
            country: 'Austlin, TX',
            friendsCount: 52,
            photosCount: 240,
            videosCount: 16
        }, {
            headerImg: 'https://html.crumina.net/html-olympus/img/friend5.jpg',
            friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar5.jpg',
            friendName: 'Elaine Dreifuss',
            country: 'New York, NY',
            friendsCount: 52,
            photosCount: 240,
            videosCount: 16
        }, {
            headerImg: 'https://html.crumina.net/html-olympus/img/friend6.jpg',
            friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar6.jpg',
            friendName: 'Bruce Peterson',
            country: 'Austin, TX',
            friendsCount: 52,
            photosCount: 240,
            videosCount: 16
        }, {
            headerImg: 'https://html.crumina.net/html-olympus/img/friend7.jpg',
            friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar7.jpg',
            friendName: 'Carol Summers',
            country: 'Los Angeles, CA',
            friendsCount: 52,
            photosCount: 240,
            videosCount: 16
        }, {
            headerImg: 'https://html.crumina.net/html-olympus/img/friend8.jpg',
            friendPhoto: 'https://html.crumina.net/html-olympus/img/avatar8.jpg',
            friendName: 'Michael Maximoff',
            country: 'Portland, OR',
            friendsCount: 58,
            photosCount: 304,
            videosCount: 19
        },
    ],
    term: ''
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FRIENDS:
            return {
                ...state,
                term: action.term
            }
        default:
            return state;
    }
};

export const searchFriends = (term) => ({type: 'SEARCH_FRIENDS', term});

export default friendsReducer;