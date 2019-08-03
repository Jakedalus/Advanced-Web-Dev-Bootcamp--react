import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, GET_TODOS } from './actionCreators';

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  console.log('state:', state, 'action:', action);
  const newState = {...state};

  switch(action.type) {
    case GET_TODOS:
      return {...state, todos: action.data}

    case ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}

    case UPDATE_TODO: 
      console.log("UPDATE_TODO, rootReducer", action);
      let updatedTodos = state.todos.map(todo => 
        todo._id === action.id ? {...todo, ...action.updates} : todo );
      console.log(updatedTodos);
      return {
        ...state,
        todos: updatedTodos
      }

    case REMOVE_TODO:
      let todos = state.todos.filter(todo => todo._id !== action.id);
      return {...state, todos};

    default: 
      return state;
  }

}