

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
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      };

    case 'REMOVE_TODO':
      let todos = state.todos.filter(todo => todo.id !== +action.id);
      return {...state, todos};
    default: 
      return state;
  }

}

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

$(document).ready(function() {

  $('ul').on('click', 'button', function(e) {
    store.dispatch({
      type: 'REMOVE_TODO',
      id: $(event.target).attr('id')
    });

    $(event.target).parent().remove();
  });

  console.log('document ready');

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
      text: newTask
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








