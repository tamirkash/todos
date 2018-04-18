import React from "react";
import './css/ErrorLabel.css';

export default class ErrorLabel extends React.Component {
    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        return (
            this.props.errorMsg ?
                <div className="error-label">{this.props.errorMsg}</div>
                :
                null
        )
    }
}