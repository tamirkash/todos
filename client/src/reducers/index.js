import { combineReducers } from 'redux';
import todos from "./todos";
import status from './status';

const reducers = combineReducers({
    todos,
    status
});

export default reducers;
