import axios from "axios";
import {USER_DISCONNECTED} from "../actions/actions";

export const initiate = (dispatch) => {
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use(response => {
        return response;
    }, function (error) {
        if (401 === error.response.status && window.location.pathname !== '/login') {
            window.location = '/login';
            localStorage.removeItem('user');
            dispatch({type: USER_DISCONNECTED});
        } else {
            return Promise.reject(error);
        }
    });
};

export const makeCall = (path, method, data) => {
    return axios(`http://localhost:3001/${path}`, {
        method,
        data
    })
};