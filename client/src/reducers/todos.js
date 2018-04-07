import {
    TODO_REMOVED,
    GOT_TODOS,
    TODO_ADDED,
    TODOS_REORDERED, STATUS_UPDATED
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
        case TODOS_REORDERED:
            return action.payload;
        case STATUS_UPDATED:
            return state.map((todo) => {
                if(action.payload.id === todo.id){
                    return Object.assign({}, todo, {status: action.payload.status})
                }

                return todo;
            });
        default:
            return state
    }
};

export default todos;
