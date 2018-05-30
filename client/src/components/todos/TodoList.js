import React from 'react';
import PropTypes from "prop-types";
import SortableTodoList from "./SortableTodoList";
import { arrayMove } from 'react-sortable-hoc';
import './css/Todos.css';

class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            listenToHover: true
        }
    }

    componentDidMount(){
        this.props.fetchTodos();
    }

    componentWillReceiveProps(props){
        this.setState({
            todos: props.todos,
            listenToHover: !props.isStatusOpen
        })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        const newTodos = arrayMove(this.state.todos, oldIndex, newIndex);

        this.setState({
            todos: newTodos,
            listenToHover: true
        });

        this.props.reorderTodos(newTodos);
    };

    onSortStart = () => {
        this.setState({
            listenToHover: false
        })
    };

    render() {
        return (
            <SortableTodoList
                {...this.state}
                onSortEnd={this.onSortEnd}
                onSortStart={this.onSortStart}
                helperClass="todo-list-item"
                onRemove={this.props.removeTodo}
                useDragHandle={true}
            />
        )
    }
}

TodoList.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    fetchTodos: PropTypes.func.isRequired
};

export default TodoList;