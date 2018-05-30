import React from "react";
import FormLink from "./FormLink";

const FormWithLinks = (links) => (WrappedForm) => {
    return class FormWithLinks extends React.Component {
        render() {
            return (
                <div>
                    <WrappedForm { ...this.props }/>
                    <div className="form-main">
                        { links.map( (link) => <FormLink {...link} key={link.label}/> ) }
                    </div>
                </div>
            )
        }
    }
};

export default FormWithLinks;