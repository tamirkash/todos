import axios from 'axios';

export const TODO_REMOVED = 'TODO_REMOVED';
export const GOT_TODOS = 'GOT_TODOS';
export const TODO_ADDED = 'TODO_ADDED';

export const removeTodo = (id) => {
  const request = axios.delete('http://localhost:3001/todos/remove/' + id);

  return (dispatch) => {
    request.then(() => {
      dispatch({type: TODO_REMOVED, payload: id})
    });
  };
}

export const fetchTodos = () => {
    const request = axios("http://localhost:3001/todos", {
        method: "get"
    });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GOT_TODOS, payload: data.todos})
    });
  };
}

export const addTodo = (text) => {
  const request = axios.post('http://localhost:3001/todos/add', {
    text
  });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: TODO_ADDED, payload: data.todo})
    });
  };
}