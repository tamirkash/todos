import {SortableContainer} from "react-sortable-hoc";
import React from "react";
import TodoContainer from "./containers/TodoContainer";

const SortableTodoList = SortableContainer(({todos, onRemove, listenToHover}) => {
    const containerStyle = `${listenToHover ? 'todo-list-container todo-list-container-listen-hover' :
        'todo-list-container'}`;

    return (
        <ul className={containerStyle}>
            {todos.map((todo, index) => (
                <TodoContainer key={todo._id}
                               onRemove={() => onRemove(todo._id)}
                               index={index}
                               {...todo}
                />
            ))}
        </ul>
    );
});

export default SortableTodoList;