import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from './actions';

const initStore = {
    init: false,
    isLoading: false,
    isError: false,
    response: '',
}

export const reducer = (state = initStore, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return { init: true, isLoading: true, isError: false, response: '' }
        }
        case GET_USER_SUCCESS: {
            return { ...state, isLoading: false, response: action.response }
        }
        case GET_USER_FAIL: {
            return { ...state, init: false, isLoading: false, isError: true }
        }
        default: return state;
    }
}