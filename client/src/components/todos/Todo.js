import React from 'react';
import PropTypes from "prop-types";
import {SortableElement, SortableHandle} from "react-sortable-hoc";
import {Button} from "react-bootstrap";
import Status from "./Status";

const DragHandle = SortableHandle(() => <div className="todo-list-item-handle"/>);

const SortableTodo = SortableElement((props) => <li className="todo-list-item">
    <div className="todo-list-item-main">
        <DragHandle/>
        <span className="todo-list-item-text">{props.text}</span>
        <span className="todo-list-item-remove">
            <Button onClick={props.onRemove}>X</Button>
        </span>
    </div>
    <Status status={props.status}
            statusList={props.statusList}
            onStatusOpenChange={props.onStatusOpenChange}
            onStatusUpdated={props.onStatusUpdated}
    />
</li>);

export default class Todo extends React.Component {
    render() {
        return (
            <SortableTodo
                {...this.props}
                onStatusUpdated={(status) => this.props.updateStatus(this.props._id, status)}
                onStatusOpenChange={(isOpen) => this.props.updateStatusIsOpen(isOpen)}
            />
        )
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired
};