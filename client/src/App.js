import React, { Component } from 'react';
import TodoListContainer from "./components/todos/containers/TodoListContainer";
import PrivateRouteContainer from "./components/privateRoute/containers/PrivateRouteContainer";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import LoginContainer from "./components/login/containers/LoginContainer";
import LoggedOutRouteContainer from "./components/loggedOutRoute/containers/LoggedOutRouteContainer";
import RegisterContainer from "./components/register/containers/RegisterContainer";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <PrivateRouteContainer exact path="/" component={TodoListContainer} />
                <LoggedOutRouteContainer path="/login" component={LoginContainer} />
                <LoggedOutRouteContainer path="/register" component={RegisterContainer}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
