import React, { Component } from "react";
import PropTypes from "prop-types";
import {Button, FormControl, FormGroup} from "react-bootstrap";
import "./css/Login.css";
import {LinkContainer} from "react-router-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onLogin(this.state);
    }

    render(){
        return (
            <div className="login-main">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Username"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                    <Button
                        bsStyle="primary"
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Let me in.
                    </Button>
                    <LinkContainer to="/register">
                        <Button
                            block
                            bsSize="large"
                        >
                            Register
                        </Button>
                    </LinkContainer>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
};