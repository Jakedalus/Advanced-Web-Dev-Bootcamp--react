import React from 'react';

const Todo = ({name, completed, deleteTodo}) => (

  <li 
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {name}
    <span onClick={deleteTodo}> X </span>
  </li>  

);

export default Todo;