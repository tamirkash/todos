import { combineReducers } from 'redux';
import todos from "./todos";
import status from './status';
import user from "./user";

const reducers = combineReducers({
    todos,
    status,
    user
});

export default reducers;
