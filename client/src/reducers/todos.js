import {
    REMOVE_TODO_SUCCESS,
    GET_TODOS_SUCCESS,
    ADD_TODO_SUCCESS,
    REORDER_TODO_SUCCESS,
    UPDATE_STATUS_SUCCESS,
    ADD_TODO_FAILURE,
    REMOVE_TODO_FAILURE,
    REORDER_TODO_FAILURE,
    GET_TODOS_FAILURE
} from '../actions/actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case GET_TODOS_SUCCESS:
            return action.payload;
        case ADD_TODO_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_TODO_SUCCESS:
            return state.filter(todo => todo._id !== action.payload);
        case REORDER_TODO_SUCCESS:
            return action.payload;
        case UPDATE_STATUS_SUCCESS:
            return state.map((todo) => {
                if(action.payload.id === todo.id){
                    return Object.assign({}, todo, {
                        status: action.payload.status
                    })
                }

                return todo;
            });
        case REORDER_TODO_FAILURE:
        case REMOVE_TODO_FAILURE:
        case ADD_TODO_FAILURE:
            return [...state];
        case GET_TODOS_FAILURE:
        default:
            return state
    }
};

export default todos;
