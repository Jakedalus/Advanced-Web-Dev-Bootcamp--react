
function rootReducer(state={count: 0}, action) {
  const newState = {...state};
  switch(action.type) {
    case 'INCREMENT':
      newState.count++;
      return newState;
    case 'DECREMENT':
      newState.count--;
      return newState;
    default:
      return state;
  }
  return state;

}

const store = Redux.createStore(rootReducer);



$(document).ready(function() {

  let currentState = store.getState();
  $('#counter').text(currentState.count);


  $('#increment').on('click', function() {
    store.dispatch({type: 'INCREMENT'});
    let currentState = store.getState();
    $('#counter').text(currentState.count);
  });

  $('#decrement').on('click', function() {
    store.dispatch({type: 'DECREMENT'});
    let currentState = store.getState();
    $('#counter').text(currentState.count);
  });
})
