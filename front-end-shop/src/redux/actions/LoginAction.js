import * as actionTypes from '../constants'
import { handleLogin } from '../../services'
import { toast } from 'react-toastify'
export const UserLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleLogin(email, password)
            if (res.data.errCode !== 0) {
                toast.error(res.data.message)
            } else {
                // localStorage.setItem('user-role', res.data.user.role)
                toast.success('Logged in successfully')
            }
            dispatch({
                type: actionTypes.USER_LOGIN,
                payload: res.data
            })

        } catch (e) {
            console.log(e);
        }
    }
}