"use strick";

const inputSelector = document.getElementById("input");
const listSelector = document.getElementById("list");
const checkboxSelector = document.getElementById("checkbox");
const filterSelector = document.getElementById("filter");
const foterNumber = document.getElementById("footer");
const activeBtn = document.getElementById("footer__active");
const todos = [];

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
    <input class="checkbox" type="checkbox"/>
    <span>${todo.title}</span>
    </div>
    </li>`;
    console.log(todo.completed); // по консоли это меняется

    listSelector.innerHTML = ulContent;
  });

  // let ulContentCompleted = "";

  // function addComplited() {
  //   todos.forEach((todo) => {
  //     if ((todo.completed = true)) {
  //       ulContentCompleted += `<li id=${todo.id} class="table__list__text__through">
  //     <div class="table__list__text__item">
  //     <input class="checkbox" type="checkbox"/>
  //     <span>${todo.title}</span>
  //     </div>
  //     </li>`;

  //       activeBtn.onclick = ulContentCompleted;
  //     }
  //   });
  // }
  // addComplited();
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
    console.log(event);
  });
});
