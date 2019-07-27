import React, { Component } from 'react';
import Todo from './Todo';

const APIURL = '/api/todos';

class TodoList extends Component {


  constructor(props) {
    super(props);

    this.state ={
      todos: []
    };
  }

  componentWillMount() {
    this.loadTodos();
  }

  loadTodos() {
    fetch(APIURL)
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding.'}
          throw err;
        }
      }
      return resp.json(); 
    })
    .then(todos => this.setState({todos}));
  }


  render() {
    const todos = this.state.todos.map(t => (
      <Todo
        key={t._id}
        {...t}
      />
    ));
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;