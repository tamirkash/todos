import {
    TODO_REMOVED,
    GOT_TODOS,
    TODO_ADDED
} from '../actions/actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case GOT_TODOS:
            return action.payload;
        case TODO_ADDED:
            return [
                ...state,
                action.payload
            ];
        case TODO_REMOVED:
            return state.filter(todo => todo._id !== action.payload);
        default:
            return state
    }
}

export default todos;
