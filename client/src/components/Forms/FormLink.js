import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Button} from "react-bootstrap";

const FormLink = ({path, label}) => {
  return (
      <LinkContainer to={path}>
          <Button
              bsStyle="primary"
              block
              bsSize="large"
          >
              {label}
          </Button>
      </LinkContainer>
  )
};

export default FormLink;