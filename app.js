"use strick";

let INPUT = document.getElementById("input");
let LIST = document.getElementById("list");
const ArrayList = [];
let CHECK = document.getElementById("CHECK");
// const card = document.querySelector(".card");
let FILTER = document.getElementById("filter");

const notes = [];

// function render() {
//   for (let note in notes) {
//     LIST.insertAdjacentHTML(
//       "beforeend",
//       `
// <li class="table__list__text">
//   <div class="table__list__text__item">
//    <input type="checkbox" class="checkbox" id="checkbox" name="checkbox" />
//    <span class="${
//      notes.completed ? `text-decoration-line-through` : ``
//    }"${notes.map(function (note) {})};></span>
//    </div>
//    <div class="table__list__btn">
//    <button class="table__list__btn__good">&check;</button>
//    <button class="table__list__btn__bad">&times;</button>
//     </li>`
//     );
//   }
// }
// render();

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    if (INPUT.value.length === 0) {
      return;
    }

    notes.push({
      title: INPUT.value,
      completed: false,
    });

    console.log(notes);

    LIST.insertAdjacentHTML(
      "beforeend",
      `
      <li class="table__list__text">
      <div class="table__list__text__item">
      <input type="checkbox" id="checkbox"  />
      <span >${INPUT.value}</span>
      </div>
      <div class="table__list__btn">
      <button class="table__list__btn__good">&check;</button>
      <button class="table__list__btn__bad">&times;</button>
      </li>`
    );

    // Если ложь - <span class="${notes.completed ? `` : `text-decoration-line-through`}>${
    //   INPUT.value
    // }</span>

    FILTER = FILTER.insertAdjacentHTML(
      "beforeend",
      `<ul>
      <span class="footer__filter__number" href="#/">${
        Object.keys(notes).length
      } пункт</span>
      <a class="footer__filter__menu" href="#/">Все</a>
      <a class="footer__filter__menu" href="#/">Активные</a>
      <a class="footer__filter__menu" href="#/">Выполненые</a>
      </ul>`
    );

    INPUT.value = "";
    //  Чтобы не повотярся футер FILTER = function () {
    //   Object.keys(notes).length;
    // };
  }
});
// Не считается фильтр, зачеркнутый текст
