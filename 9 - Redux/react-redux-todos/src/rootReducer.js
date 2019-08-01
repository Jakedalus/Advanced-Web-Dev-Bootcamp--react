import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators';

const initialState = {
  todos: [],
  id: 0
};

export default function rootReducer(state = initialState, action) {
  console.log('state:', state, 'action:', action);
  const newState = {...state};

  switch(action.type) {
    case ADD_TODO:
      newState.id++;
      return {
        ...newState, 
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      };

    case UPDATE_TODO: 
      let updatedTodos = state.todos.map(todo => 
        todo.id === action.id ? {...todo, ...action.updates} : todo );
      console.log(updatedTodos);
      return {
        ...state,
        todos: updatedTodos
      }

    case REMOVE_TODO:
      let todos = state.todos.filter(todo => todo.id !== action.id);
      return {...state, todos};

    default: 
      return state;
  }

}