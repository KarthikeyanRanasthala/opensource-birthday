import Axios from 'axios';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUserRequest = (query) => {
    return {
        type: GET_USER_REQUEST,
        query
    }
}

export const getUserSuccess = (response) => {
    return {
        type: GET_USER_SUCCESS,
        response
    }
}

export const getUserFail = (error) => {
    return {
        type: GET_USER_FAIL,
        error
    }
}

export const getUser = (query) => {
    return dispatch => {
        dispatch(getUserRequest(query));
        return Axios.get(`https://api.github.com/users/${query}`)
                .then(resp => {
                    return dispatch(getUserSuccess(resp.data))
                })
                .catch(error => {
                    console.log(error);
                    return dispatch(getUserFail(error))
                })
    }
}