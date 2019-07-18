import React, { Component } from 'react';
import './TodoListApp.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoListApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((prevState, props) => {
      const todos = prevState.todos.slice();
      todos.push(todo);
      console.log(todos);
      return {
        todos
      }
    });
  }
  
  render() {
    return (
      <div className="TodoListApp">
        <h1>Simple React Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoListApp;
