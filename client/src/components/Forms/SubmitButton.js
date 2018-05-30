import React from "react";
import {Button} from "react-bootstrap";

const SubmitButton = ({label, disabled}) => {
    return (
        <Button
            bsStyle="primary"
            block
            bsSize="large"
            disabled={disabled}
            type="submit"
        >
            {label}
        </Button>
    )
};

export default SubmitButton;