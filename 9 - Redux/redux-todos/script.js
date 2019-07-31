

const initialState = {
  todos: [],
  id: 0
};

function rootReducer(state=initialState, action) {

  const newState = {...state};
  
  switch(action.type) {
    case 'ADD_TODO':
      newState.id++;
      return {
        ...newState,
        todos: [...newState.todos, {task: action.task, id: newState.id, completed: false}]
      };
    case 'UPDATE_TODO':
      let updatedTotos = state.todos.map(todo => todo.id === +action.id ? ({...todo, completed: action.completed}) : todo)
      return {...state, todos: updatedTotos};
    case 'REMOVE_TODO':
      let newTodos = state.todos.filter(todo => todo.id !== +action.id);
      return {...state, todos: newTodos};
    default: 
      return state;
  }

}

const store = Redux.createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

$(document).ready(function() {

  console.log('document ready');

  $('ul').on('click', 'button', function(e) {
    store.dispatch({
      type: 'REMOVE_TODO',
      id: $(event.target).attr('id')
    });

    $(event.target).parent().remove();
  });

  $('ul').on('click', 'li', function(e) {
    console.log('clicked', e.target, e.target.tagName);
    if (e.target.tagName !== 'BUTTON') {
      let currentState = store.getState();
      let id = $(e.target).attr('data-id');
      let completed = currentState.todos.find(todo => todo.id === +id).completed;

      console.log('Updating todo', id, currentState.todos.find(todo => todo.id === +id));

      store.dispatch({
        type: 'UPDATE_TODO',
        id,
        completed: !completed
      });

      const style = !completed ? {'text-decoration': 'line-through'} : {'text-decoration': 'none'};

      $(event.target).css(style);
    }

  });

  

  $('form').on('submit', function(e) {
    e.preventDefault();
    let newTask = $('#task').val();
    console.log(newTask);
    store.dispatch({
      type: 'ADD_TODO',
      task: newTask
    });

    let currentState = store.getState();

    let newLi = $('<li>', {
      text: newTask, 
      'data-id': currentState.id
    });

    let newButton = $('<button>', {
      text: 'X',
      id: currentState.id
    });

    newLi.append(newButton);

    $('#todos').append(newLi);

    $('form').trigger('reset');
    console.log(store.getState());
  });

});








