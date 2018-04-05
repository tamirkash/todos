import {SortableContainer} from "react-sortable-hoc";
import Todo from "./Todo";
import React from "react";

const SortableTodoList = SortableContainer(({todos, onRemove, listenToHover}) => {
    const containerStyle = `${listenToHover ? 'todo-list-container todo-list-container-listen-hover' :
        'todo-list-container'}`;

    return (
        <ul className={containerStyle}>
            {todos.map((todo, index) => (
                <Todo key={todo._id} onRemove={() => onRemove(todo._id)} index={index} text={todo.text}/>
            ))}
        </ul>
    );
});

export default SortableTodoList;