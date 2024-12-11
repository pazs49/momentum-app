export const setTodos = (todos) => {
  const todosLiToDelete = document.querySelectorAll(".todos-section-ul__li");
  todosLiToDelete.forEach((el) => {
    el.remove();
  });
  todos.forEach((todo, i, array) => {
    const todoLi = document.createElement("li");
    const todoP = document.createElement("p");
    const todoButton = document.createElement("button");

    todoLi.classList.add("todos-section-ul__li");

    todoP.innerText = todo;
    todoButton.innerText = "Delete";

    todoButton.onclick = () => {
      deleteTodo(todos, todo, todoLi);
    };

    const todosUlEl = document.querySelector(".todos-section-ul");

    todoLi.append(todoP, todoButton);
    todosUlEl.appendChild(todoLi);
  });
  return;
};

const deleteTodo = (todos, todo, todoLi) => {
  todos.forEach((el) => {
    if (el === todo) {
      todoLi.remove();
      // Reassinging array inside a function using filter doesn't change the passed array
      // Doesn't change the ref array but todos.pop() works, filter changed the todos reference...
      // It said it's because filter reassigned a new array, hence, it's a new one but I tested it with const and still got changed.
      // Seems the parameter became a local variable..
      // todos = todos.filter((_el) => {
      //   return _el !== el;
      // });

      const index = todos.indexOf(todo);
      todos.splice(index, 1);

      console.log(todos + " remaining..");
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};
