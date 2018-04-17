import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const LoggedOutRoute = ({ component: Component, logged, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !logged ? (
                    <div>
                        <Component {...props} />
                    </div>
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                )
            }
        />
    )
}

LoggedOutRoute.propTypes = {
    logged: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
};

export default LoggedOutRoute;