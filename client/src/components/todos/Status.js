import React from 'react';
import {ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";

export default class StatusDropdown extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            status: this.props.status
        };

        this.onStatusUpdated = this.onStatusUpdated.bind(this);
    }

    onStatusUpdated(status){
        this.setState({
            status
        });

        this.props.onStatusUpdated(status);
    }

    render() {
        return (
            <div className="todo-list-item-status">
                <ButtonToolbar>
                    <DropdownButton
                        bsStyle="default"
                        title={this.state.status}
                        noCaret
                        id="dropdown-no-caret"
                        onToggle={this.props.onStatusOpenChange}
                    >
                        {
                            this.props.statusList.reduce((items, status) => {
                                if(this.state.status !== status.status){
                                    items.push(
                                        <MenuItem
                                            onClick={() => this.onStatusUpdated(status.status)}
                                            key={status._id}
                                        >
                                            {status.status}
                                            </MenuItem>
                                    )
                                }
                                return items;
                            }, [])
                        }
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}