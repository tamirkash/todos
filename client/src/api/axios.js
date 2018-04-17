import * as axios from "axios";
import {USER_DISCONNECTED} from "../actions/actions";

const initiateAxios = (dispatch) => {
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
}

export default initiateAxios;