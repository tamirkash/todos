import axios from 'axios';

export const TODO_REMOVED = 'TODO_REMOVED';
export const GOT_TODOS = 'GOT_TODOS';
export const TODO_ADDED = 'TODO_ADDED';
export const TODOS_REORDERED = 'TODOS_REORDERED';
export const GOT_STATUS_LIST = 'GOT_STATUS_LIST';
export const STATUS_UPDATED = 'STATUS_UPDATED';
export const STATUS_OPEN_CHANGE = 'STATUS_OPEN_CHANGE';

export const removeTodo = (id) => {
  const request = axios.delete('http://localhost:3001/todos/remove/' + id);

  return (dispatch) => {
    request.then(() => {
      dispatch({type: TODO_REMOVED, payload: id})
    });
  };
};

export const fetchTodos = () => {
    const request = axios("http://localhost:3001/todos", {
        method: "get"
    });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GOT_TODOS, payload: data.todos})
    });
  };
};

export const addTodo = (text) => {
  const request = axios.post('http://localhost:3001/todos/add', {
    text
  });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: TODO_ADDED, payload: data.todo})
    });
  };
};

export const reorderTodos = (todos) => {
    const request = axios.put('http://localhost:3001/todos/reorder', {
        todos
    });

    return (dispatch) => {
        request.then(() => {
            dispatch({type: TODOS_REORDERED, payload: todos})
        });
    };
};

export const getStatusList = () => {
    const request = axios.get('http://localhost:3001/todos/status-list');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({type: GOT_STATUS_LIST, payload: data.statusList})
        });
    }
};

export const updateStatus = (id, status) => {
    const request = axios.put('http://localhost:3001/todos/status', {
        id,
        status
    });

    return (dispatch) => {
        request.then(() => {
           dispatch({type: STATUS_UPDATED, payload: {id, status}})
        });
    }
};

export const updateStatusIsOpen = (isOpen) => {
    return {
        type: STATUS_OPEN_CHANGE,
        payload: isOpen
    }
};