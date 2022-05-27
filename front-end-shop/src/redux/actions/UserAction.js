import * as actionTypes from '../constants'
import { ReadUser, CreateUser, DeleteUser } from '../../services'
import { toast } from 'react-toastify'
export const CreateUserAction = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await CreateUser(data)
            if (res) {
                if (res.data.errCode !== 0) {
                    toast.error(res.data.message)
                } if (res.data.errCode === 0) {
                    toast.success('A user created !')
                }
                dispatch({
                    type: actionTypes.CREATE_USER,
                    payload: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
}
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
export const UpdateUserAction = (id) => {
    return async (dispatch, getState) => {
        try {

        } catch (e) {
            console.log(e);
        }
    }
}
export const DeleteUserAction = (id) => {
    return async (dispatch, getState) => {
        try {
            console.log(id);
            let res = await DeleteUser(id)
            if (res) {
                dispatch({
                    type: actionTypes.DELETE_USER,
                    payload: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
}

