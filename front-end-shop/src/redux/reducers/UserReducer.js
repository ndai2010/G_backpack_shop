import * as actionTypes from '../constants'
const initState = {
    list_user: [],
    message: {},
    deleteMessage: {}
}
export const UserReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.READ_USER:
            let item = actions.payload;
            state.list_user = item
            return state.list_user;
        case actionTypes.CREATE_USER:
            let message = actions.payload
            state.message = message
            return state.message
        case actionTypes.DELETE_USER:
            let deleteMessage = actions.payload
            state.deleteMessage = deleteMessage
            return state.deleteMessage
        default:
            return state;
    }
}