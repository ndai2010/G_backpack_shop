import * as actionTypes from '../constants'
const initState = {
    all_user: []
}
export const UserReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.READ_ALL_USER:
            let item = actions.payload;
            state.all_user = item
            return state;
        case actionTypes.CREATE_USER:
            return state
        default:
            return state;
    }
}