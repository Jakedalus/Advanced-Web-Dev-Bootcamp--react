import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from "./NewTodoForm";
import { connect } from 'react-redux';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators';
import { addTodo, removeTodo, updateTodo } from './actionCreators';
import { Route } from "react-router-dom";

class TodoList extends Component {
  
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(val) {
    this.props.addTodo(val);
  }


  removeTodo(id){
    this.props.removeTodo(id);
  }

  updateTodo(id, updates) {
    console.log('Updating todo...', id, updates);
    this.props.updateTodo(id, updates);
  }

  render() {

    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        updateTodo={this.updateTodo.bind(this, val.id)}
        task={val.task}
        completed={val.completed}
        key={index}
      />
    ));
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleSubmit} />
          )}
        />
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }

}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  }
}



export default connect(mapStateToProps, { addTodo, removeTodo, updateTodo })(TodoList);







