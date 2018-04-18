import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, PAGE_UNMOUNT, REGISTER_FAILURE,
    REGISTER_REQUEST,
    USER_DISCONNECTED
} from '../actions/actions';

const initialState = {
    logged: localStorage.getItem('user') !== null,
    username: localStorage.getItem('user'),
    errorMsg: null
};

const user = (state = initialState, action) => {
    switch (action.type){
        case PAGE_UNMOUNT:
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                errorMsg: null
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                logged: true,
                username: action.payload
            });
        case USER_DISCONNECTED:
            return Object.assign({}, state, {logged: false, username: null});
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return Object.assign({}, state, {errorMsg: action.payload});
        default:
            return state;
    }
};

export default user;
