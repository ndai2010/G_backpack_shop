import * as actionTypes from '../constants'
import { ReadUser } from '../../services'

export const UserAction = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await ReadUser(id)
            if (res) {
                dispatch({
                    type: actionTypes.READ_USER,
                    payload: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
}