import * as actionTypes from '../constants'
import { GetAllUser } from '../../services'

export const UserAction = () => {
    return async (dispatch, getState) => {
        try {
            let res = await GetAllUser()
            if (res) {
                dispatch({
                    type: actionTypes.READ_ALL_USER,
                    payload: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
}