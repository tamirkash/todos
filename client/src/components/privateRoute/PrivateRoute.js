import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import NavigationContainer from "../navigation/containers/NavigationContainer";

const PrivateRoute = ({ component: Component, logged, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                logged ? (
                    <div>
                        <NavigationContainer location={props.location.pathname}/>
                        <Component {...props} />
                    </div>
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        />
    )
}

PrivateRoute.propTypes = {
    logged: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
};

export default PrivateRoute;