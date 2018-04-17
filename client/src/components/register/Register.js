import React, { Component } from "react";
import PropTypes from "prop-types";
import {Button, FormControl, FormGroup} from "react-bootstrap";
import './css/Register.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            password: "",
            password2: "",
            email: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0 &&
            this.state.name.length > 0 && this.state.password === this.state.password2;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onRegister(this.state);
    }

    render(){
        return (
            <div className="register-main">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="name" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                    </FormGroup>
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
                    <FormGroup controlId="password2" bsSize="large">
                        <FormControl
                            value={this.state.password2}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </FormGroup>
                    <Button
                        bsStyle="primary"
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    onRegister: PropTypes.func.isRequired
};