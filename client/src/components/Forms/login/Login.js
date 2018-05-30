import React, { Component } from "react";
import PropTypes from "prop-types";
import FormWithLinks from "../FormWithLinks";
import Form from "../Form";

class Login extends Component {
    validateForm(inputs) {
        return inputs.username.length > 0 && inputs.password.length > 0;
    }

    render(){
        return (
            <Form
                onSubmit={this.props.onLogin}
                validateForm={this.validateForm}
                inputs={[
                    {
                        name: "username",
                        type: "text",
                        placeholder: "Username"
                    },
                    {
                        name: "password",
                        type: "password",
                        placeholder: "Password"
                    }
                ]}
                submitLabel="Login"
            />
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default FormWithLinks([{ label: "Register", path: "/register"}])(Login);