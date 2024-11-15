"use strick";

const inputSelector = document.getElementById("input");
const listSelector = document.getElementById("list");
const checkboxSelector = document.getElementById("checkbox");
const filterSelector = document.getElementById("filter");
const todos = [];
const foterNumber = document.getElementById("footer");

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    if (inputSelector.value.length === 0) {
      return;
    }

    addText();

    inputSelector.value = "";
  }
});

function addText() {
  todos.push({
    title: inputSelector.value,
    completed: false,
    id: Math.random().toString(),
  });
  render();
}

function render() {
  console.log(todos);

  let ulContent = "";

  todos.forEach((todo) => {
    ulContent += `<li id=${todo.id} class=${
      todo.completed ? `table__list__text__through` : `table__list__text`
    }>
    <div class="table__list__text__item">
    <input class="checkbox" id=${todo.id} type="checkbox"/>
    <span>${todo.title}</span>
    </div>
    </li>`;
    console.log(todo.completed); // по консоли это меняется

    listSelector.innerHTML = ulContent;
  });

  document.addEventListener("change", (event) => {
    todos.forEach((todo) => {
      if (todo.id === event.target.parentElement.firstElementChild.id) {
        todo.completed = !todo.completed;
      }
      render();
      console.log(event);
      console.log(event.target.parentElement.firstElementChild.id);
      console.log(todo.id);
      console.log(todo.id == event.target.parentElement.firstElementChild.id);
      console.log(todo.completed); // по консоли это меняется
    });
  });
}
