import * as actionTypes from '../constants'
const initState = {
    message: [],
}
export const loginReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.USER_LOGIN:
            let item = actions.payload;
            state.message = item
            return state.message
        case actionTypes.USER_LOGOUT:
            return state
        default:
            return state;
    }
}