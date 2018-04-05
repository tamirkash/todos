import React, { Component } from 'react';
import TodoListContainer from "./components/todos/containers/TodoListContainer";
import NavigationContainer from "./components/navigation/containers/NavigationContainer";

class App extends Component {
  render() {
    return (
      <div>
          <NavigationContainer />
          <TodoListContainer />
      </div>
    );
  }
}

export default App;
