import axios from "axios";
import {USER_DISCONNECTED} from "../actions/actions";

export const initiate = (dispatch) => {
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use(response => {
        return response;
    }, function (error) {
        if (error.response !== undefined && 401 === error.response.status && window.location.pathname !== '/login') {
            localStorage.removeItem('user');
            dispatch({type: USER_DISCONNECTED});

            return Promise.reject({
               message: "user not connected"
            });
        } else {
            return Promise.reject({
                code: error.response !== undefined ? error.response.status : null,
                message: error.response !== undefined ? error.response.data.message : "Server is not available"
            });
        }
    });
};

export const makeCall = (path, method, data) => {
    return axios(`http://localhost:3001/${path}`, {
        method,
        data
    })
};