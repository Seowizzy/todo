"use strick";

const inputSelector = document.getElementById("input");
const listSelector = document.getElementById("list");
const checkboxSelector = document.getElementById("checkbox");
const filterSelector = document.getElementById("filter");
const footFilter = document.getElementById("filter");
const allBtn = document.getElementById("all");
const activeBtn = document.getElementById("active");
const completedBtn = document.getElementById("completed");
const crossBtn = document.getElementById("cross");
const todos = [];
let filter = "ALL";

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
  let ulContent = "";

  todos.forEach((todo) => {
    ulContent += `<li id=${todo.id} class=${
      todo.completed ? `table__list__text__through` : `table__list__text`
    }>
    <div class="table__list__text__item">
    <input class="checkbox" type="checkbox" ${todo.completed ? `checked` : ``}/>
    <span>${todo.title}</span>
    <div class="cross">X</div>
    </div>
    </li>`;
  });

  listSelector.innerHTML = ulContent;

  foot();
}

document.addEventListener("change", (event) => {
  if (event.code === "Enter") {
    return;
  }

  todos.forEach((todo) => {
    if (todo.id === event.target.parentElement.parentElement.id) {
      todo.completed = !todo.completed;
      render();
    }
  });
});

function foot() {
  if (todos.length > 0) {
    const arrayCount = todos.map((todo) => {
      if (todo.completed === false) {
        return todo;
      }
    });

    footFilter.innerHTML = `
        <span href="#/">${arrayCount.length} пункт(а)</span>
      <div class="filter_text">
        <a class="footer__menu" id="all" href="#/">Все</a>
        <a class="footer__menu" id="active" href="#/">Активные</a>
        <a class="footer__menu" id="completed" href="#/">Выполненые</a>
    </div>  
  `;
  } else {
    footFilter.innerHTML = "";
  }
}

document.addEventListener("click", (event) => {
  const currentElement = event.target;

  if (!currentElement.classList.contains("cross")) return;

  todos.forEach((todo, index) => {
    if (todo.id === currentElement.parentElement.parentElement.id) {
      todos.splice(index, 1);
    }
  });

  render();
});
