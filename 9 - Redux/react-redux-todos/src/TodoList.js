import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class TodoList extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        { this.state.todos.map((task,idx) => <Todo task={task} key={idx} />) }
      </ul>
    );
  }

}

export default connect()(TodoList);