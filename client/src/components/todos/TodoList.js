import React from 'react';
import PropTypes from "prop-types";
import SortableTodoList from "./SortableTodoList";
import { arrayMove } from 'react-sortable-hoc';
import './css/Todos.css'

export class TodoList extends React.Component {
    constructor(){
        super();

        this.state ={
            todos: [],
            listenToHover: true
        }
    }

    componentDidMount(){
        this.props.fetchTodos();
    }

    componentWillReceiveProps(props){
        this.setState({
            todos: props.todos
        })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            todos: arrayMove(this.state.todos, oldIndex, newIndex),
            listenToHover: true
        })
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
                useDragHandle={true}/>
        )
    }
}

TodoList.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    fetchTodos: PropTypes.func.isRequired
};