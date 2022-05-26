import * as actionTypes from '../constants'
const initState = {
    list_user: []
}
export const UserReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.READ_USER:
            let item = actions.payload;
            state.list_user = item
            return state.list_user;
        case actionTypes.CREATE_USER:
            return state
        default:
            return state;
    }
}