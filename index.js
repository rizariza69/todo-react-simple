const newTodo = (
  state = {
    todo: []
  },
  action
) => {
  const valueElement = document.getElementById("input");

  switch (action.type) {
    case "SHOW_TODO":
      return state.todo;
    case "ADD_TODO":
      return {
        ...state,
        todo: state.todo.concat(valueElement.value)
      };
    default:
      return state;
  }
};

const store = Redux.createStore(newTodo);

const addValueElement = document.getElementById("value");

function renderShow() {
  addValueElement.innerHTML = store.getState().todo.toString();
  // addValueElement.innerHTML = store.getState().todo.map((item, index) => {
  //   return `${item.todo}`;
  // });
}

renderShow();
store.subscribe(renderShow);
