const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody:  '',
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }
        }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody});

export default dialogsReducer;