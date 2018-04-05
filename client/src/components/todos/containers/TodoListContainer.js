import { connect } from 'react-redux';
import {fetchTodos, removeTodo} from "../../../actions/actions";
import {TodoList} from "../TodoList";

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos()),
        removeTodo: (id) => dispatch(removeTodo(id))
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);