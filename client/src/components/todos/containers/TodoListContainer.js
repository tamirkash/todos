import { connect } from 'react-redux';
import {fetchTodos, getStatusList, removeTodo, reorderTodos} from "../../../actions/actions";
import {TodoList} from "../TodoList";

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos()),
        removeTodo: (id) => dispatch(removeTodo(id)),
        reorderTodos: (todos) => dispatch(reorderTodos(todos)),
        getStatusList: () => dispatch(getStatusList())
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        isStatusOpen: state.status.isStatusOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);