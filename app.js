"use strick";

const inputSelector = document.getElementById("input");
const listSelector = document.getElementById("list");
const checkboxSelector = document.getElementById("checkbox");
const filterSelector = document.getElementById("filter");
const footFilter = document.getElementById("filter");
let allBtn = document.getElementById("all");
let activeBtn = document.getElementById("active");
let completedBtn = document.getElementById("completed");
const counter = document.getElementById("counter");
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
  filterByTabs();
}

function render(todos) {
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
      filterByTabs();
    }
  });
});

function foot() {
  let length = 0;
  todos.forEach((todo) => {
    if (todo.completed === false) {
      length = length + 1;
    }
  });

  counter.innerHTML = `${length} `;
}

document.addEventListener("click", (event) => {
  const currentElement = event.target;

  if (!currentElement.classList.contains("cross")) return;

  todos.forEach((todo, index) => {
    if (todo.id === currentElement.parentElement.parentElement.id) {
      todos.splice(index, 1);
    }
  });

  filterByTabs();
});

allBtn.addEventListener("click", () => {
  filterByTabs("ALLBTN");
});

activeBtn.addEventListener("click", () => {
  filterByTabs("ACTIVE");
});

completedBtn.addEventListener("click", () => {
  filterByTabs("COMPLETED");
});

function filterByTabs(tab = "ALLBTN") {
  let filteredArray = [];

  if (tab === "ALLBTN") {
    filteredArray = todos;
  }

  if (tab === "ACTIVE") {
    filteredArray = todos.filter((todo) => !todo.completed);
  }

  if (tab === "COMPLETED") {
    filteredArray = todos.filter((todo) => todo.completed);
  }
  render(filteredArray);
}
