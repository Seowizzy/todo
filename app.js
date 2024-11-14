"use strick";

const inputSelector = document.getElementById("input");
const listSelector = document.getElementById("list");
const checkboxSelector = document.getElementById("checkbox");
const filterSelector = document.getElementById("filter");
const todos = [];
const foterNumber = document.getElementById("footer__filter__number");

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
    ulContent += `<li id=${todo.id} class="table__list__text">
      <div class="table__list__text__item">
        <input class="checkbox" id=${todo.id} type="checkbox"/>
        <span>${todo.title}</span>
      </div>
    </li>`;
  });
  listSelector.innerHTML = ulContent;
}

document.addEventListener("change", (event) => {
  console.log(event);
  todos.forEach((todo) => {
    console.log((todo.completed = !todo.completed));
    if (todo.id == event.parentElement.parentElement.id) {
      todo.completed = true;
    }
    // написал туда todo.id в инпут чтобы перентэлемент работал (выдает ошибку в консоли)
    // Думаю, что проблема может быть что это родитель родителя,
    //  то есть сперва ul потом li потом чек

    // Добавляем строку с перечеркнутым значением если комптиды отличаются
    if ((todo.completed = true)) {
      ulThrough += `<li id=${todo.id} class="table__list__text">
        <div class="table__list__text__item">
        <input class="checkbox-through" id=${todo.id} type="checkbox"/>
        <span>${todo.title}</span>
        </div>
        </li>`;
      listSelector.innerHTML = ulThrough;
    }
  });
});
