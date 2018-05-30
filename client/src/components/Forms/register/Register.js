import React, { Component } from "react";
import PropTypes from "prop-types";
import FormWithLinks from "../FormWithLinks";
import Form from "../Form";

class Register extends Component {
    validateForm(inputs) {
        return inputs.username.length > 0 && inputs.password.length > 0 &&
            inputs.email.length > 0 && inputs.name.length > 0 &&
            inputs.password === inputs.password2;
    }

    render(){
        return (
            <Form
                onSubmit={this.props.onRegister}
                validateForm={this.validateForm}
                inputs={[
                    {
                        name: "name",
                        type: "text",
                        placeholder: "Name"
                    },
                    {
                        name: "email",
                        type: "email",
                        placeholder: "Email"
                    },
                    {
                        name: "username",
                        type: "text",
                        placeholder: "Username"
                    },
                    {
                        name: "password",
                        type: "password",
                        placeholder: "Password"
                    },
                    {
                        name: "password2",
                        type: "password",
                        placeholder: "Confirm Password"
                    }
                ]}
                submitLabel="Register"
            />
        )
    }
}

Register.propTypes = {
    onRegister: PropTypes.func.isRequired
};

export default FormWithLinks([{ label: "Login", path: "/login"}])(Register);