import React, {Component} from "react";
import './css/Forms.css';
import PropTypes from "prop-types";
import ErrorLabelContainer from "../ErrorLabel/containers/ErrorLabelContainer";
import FormInputs from "./FormInputs";
import SubmitButton from "./SubmitButton";

class Form extends Component {
    constructor(props) {
        super(props);

        const inputs = {};

        this.props.inputs.reduce((inputs, input) => {
            inputs[input.name] = "";

            return inputs;
        }, inputs);

        this.state = {
            ...inputs
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <div className="form-main">
                <form onSubmit={this.handleSubmit}>
                    <ErrorLabelContainer/>
                    <FormInputs handleChange={this.handleChange} inputs={this.props.inputs}/>
                    <SubmitButton label={this.props.submitLabel} disabled={!this.props.validateForm(this.state)} />
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    inputs: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired).isRequired,
    submitLabel: PropTypes.string.isRequired
};

export default Form;