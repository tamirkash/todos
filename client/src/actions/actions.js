import {makeCall as makeAPICall} from '../api/API';

export const REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const REORDER_TODO_REQUEST = 'REORDER_TODO_REQUEST';
export const REORDER_TODO_SUCCESS = 'REORDER_TODO_SUCCESS';
export const REORDER_TODO_FAILURE = 'REORDER_TODO_FAILURE';
export const GET_STATUS_LIST_REQUEST = 'GET_STATUS_LIST_REQUEST';
export const GET_STATUS_LIST_SUCCESS = 'GET_STATUS_LIST_SUCCESS';
export const GET_STATUS_LIST_FAILURE = 'GET_STATUS_LIST_FAILURE';
export const UPDATE_STATUS_REQUEST = 'UPDATE_STATUS_REQUEST';
export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS';
export const UPDATE_STATUS_FAILURE = 'UPDATE_STATUS_FAILURE';
export const STATUS_OPEN_CHANGE = 'STATUS_OPEN_CHANGE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';
export const PAGE_UNMOUNT = 'PAGE_UNMOUNT';

export const removeTodo = (id) => {
    return (dispatch) => {
        makeAPICall(`todos/${id}`, 'delete').then(
            () => dispatch({
                type: REMOVE_TODO_SUCCESS,
                payload: id
            }),
            error => dispatch({
                type: REMOVE_TODO_FAILURE
            })
        );
    };
};

export const fetchTodos = () => {
    return (dispatch) => {
        makeAPICall('todos', 'get').then(
            ({data}) => {
                dispatch({
                    type: GET_TODOS_SUCCESS,
                    payload: data.todos
                });
                dispatch(getStatusList());
            },
            error => dispatch({
                type: GET_TODOS_FAILURE
            })
        )
    };
};

export const addTodo = (text) => {
    return (dispatch) => {
        makeAPICall('todos', 'post', {text}).then(
            ({data}) => dispatch({
                type: ADD_TODO_SUCCESS,
                payload: data.todo
            }),
            error => dispatch({
                type: ADD_TODO_FAILURE
            })
        )
    }
};

export const reorderTodos = (todos) => {
    return (dispatch) => {
        makeAPICall('todos/reorder', 'put', {todos}).then(
            () => dispatch({
                type: REORDER_TODO_SUCCESS,
                payload: todos
            }),
            error => dispatch({
                type: REORDER_TODO_FAILURE
            })
        );
    };
};

export const getStatusList = () => {
    return (dispatch) => {
        makeAPICall('todos/status-list', 'get').then(
            ({data}) => dispatch({
                type: GET_STATUS_LIST_SUCCESS,
                payload: data.statusList
            }),
            error => dispatch({
                type: GET_STATUS_LIST_FAILURE
            })
        );
    }
};

export const updateStatus = (id, status) => {
    return (dispatch) => {
        makeAPICall('todos/status', 'put', {id, status}).then(
            () => dispatch({
                type: UPDATE_STATUS_SUCCESS,
                payload: {id, status}
            }),
            error => dispatch({
                type: UPDATE_STATUS_FAILURE
            })
        );
    }
};

export const updateStatusIsOpen = (isOpen) => {
    return {
        type: STATUS_OPEN_CHANGE,
        payload: isOpen
    }
};

export const login = ({username, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        makeAPICall('login', 'post', {username, password}).then(
            (res) => {
                localStorage.setItem('user', res.data.username);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.username
                });
            },
            error => dispatch({
                type: LOGIN_FAILURE,
                payload: error.code === 401 ? "Invalid username or password" : error.message
            })
        )
    }
};

export const logout = () => {
    return (dispatch) => {
        makeAPICall('logout', 'put').then(() => {
            localStorage.removeItem('user');
            dispatch({type: USER_DISCONNECTED});
        });
    }
};

export const register = (input) => {
    return (dispatch) => {
        dispatch({type: REGISTER_REQUEST});
        makeAPICall('register', 'post', {...input}).then(
            () => {
                dispatch({type: REGISTER_SUCCESS});
                dispatch(login(input));
            },
            error => dispatch({
                type: REGISTER_FAILURE,
                payload: error.message
            }))
    }
};

export const onUnmount = () => {
    return {
        type: PAGE_UNMOUNT
    }
};