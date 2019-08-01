import React, { Component } from 'react'

const Todo = ({task, completed, removeTodo, updateTodo}) => ( 
  <li>
    <span 
      onClick={() => updateTodo({completed: !completed})}
      style={completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }
    >
      {task}
    </span>
    <button onClick={removeTodo}>X</button>
  </li> );  

export default Todo;