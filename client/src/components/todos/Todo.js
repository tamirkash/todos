import React from 'react';
import PropTypes from "prop-types";
import {SortableElement, SortableHandle} from "react-sortable-hoc";
import {Button} from "react-bootstrap";

const DragHandle = SortableHandle(() => <div className="todo-list-item-handle"/>);

const Todo = SortableElement(({text, onRemove}) => <li className="todo-list-item">
    <DragHandle/>
    <span className="todo-list-item-text">{ text }</span>
    <span className="todo-list-item-remove">
        <Button onClick={onRemove}>Remove</Button>
    </span>
</li>);

Todo.propTypes = {
    text: PropTypes.string.isRequired
};

export default Todo;