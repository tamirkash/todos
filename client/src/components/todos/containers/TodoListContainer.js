import { connect } from 'react-redux';
import {fetchTodos, removeTodo, reorderTodos} from "../../../actions/actions";
import TodoList from "../TodoList";

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos()),
        removeTodo: (id) => dispatch(removeTodo(id)),
        reorderTodos: (todos) => dispatch(reorderTodos(todos))
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        isStatusOpen: state.status.isStatusOpen
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);