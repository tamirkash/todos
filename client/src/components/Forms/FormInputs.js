import React from "react";
import {FormControl, FormGroup} from "react-bootstrap";
import './css/Forms.css';

const FormInputs = ({inputs, handleChange}) => {
        return (
                <div>
                    {
                        inputs.map((input, idx) => {
                            return (
                                <FormGroup controlId={input.name} bsSize="large" key={input.name}>
                                    <FormControl
                                        autoFocus={idx === 0}
                                        type={input.type}
                                        value={inputs[input.name]}
                                        onChange={handleChange}
                                        placeholder={input.placeholder}
                                    />
                                </FormGroup>
                            )
                        })
                    }
                </div>
        )
};

export default FormInputs;