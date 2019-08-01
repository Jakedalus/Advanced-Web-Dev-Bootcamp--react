import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators';
import { addTodo, removeTodo, updateTodo } from './actionCreators';

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      task: ""
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}); 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({task: ''});
  }

  removeTodo(id){
    this.props.removeTodo(id);
  }

  updateTodo(id, updates) {
    console.log('Updating todo...', id, updates);
    this.props.updateTodo(id, updates);
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task: </label>
          <input 
            type="text" 
            name="task" 
            id="task" 
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
        <ul>
          { this.props.todos.map((todo,idx) => 
            <Todo 
              removeTodo={this.removeTodo.bind(this, todo.id)} 
              updateTodo={this.updateTodo.bind(this, todo.id)}
              task={todo.task} 
              completed={todo.completed}
              key={idx} 
              />
          )}
        </ul>
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







