import {
    USER_CONNECTED,
    USER_DISCONNECTED
} from '../actions/actions';

let initialState = {
    logged: localStorage.getItem('user') !== null,
    username: localStorage.getItem('user')
}

const user = (state = initialState, action) => {
    switch (action.type){
        case USER_CONNECTED:
            return Object.assign({}, state, {logged: true, username: action.payload});
        case USER_DISCONNECTED:
            return Object.assign({}, state, {logged: false, username: null});
        default:
            return state
    }
}

export default user;
