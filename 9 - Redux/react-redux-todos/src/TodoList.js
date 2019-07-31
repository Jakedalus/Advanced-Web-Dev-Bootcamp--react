import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Eat', 'Sleep']
    };
  }

  render() {
    return (
      <ul>
        { this.state.todos.map((task,idx) => <Todo task={task} key={idx} />) }
      </ul>
    );
  }

}