"use strick";

let INPUT = document.getElementById("input");
let LIST = document.getElementById("list");
// const ArrayList = [];
let CHECK = document.getElementById("CHECK");
// const card = document.querySelector(".card");
let FILTER = document.getElementById("filter");

const notes = [
  {
    title: INPUT.value,
    completed: false,
  },
  {
    title: `Сходить в cад`,
    completed: true,
  },
];

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
    // const NewNotes = {
    //   title: INPUT.value,
    //   completed: false,
    // }
    LIST.insertAdjacentHTML(
      "beforeend",
      `
      <li class="table__list__text">
      <div class="table__list__text__item">
      <input type="checkbox" class="checkbox" id="checkbox"  />
      <span>${INPUT.value}</span>
      </div>
      <div class="table__list__btn">
      <button class="table__list__btn__good">&check;</button>
      <button class="table__list__btn__bad">&times;</button>
      </li>`
    );
  }
});
{
  /* <input type="checkbox" class="${
        notes.completed ? `text-decoration-line-through` : ``
      } id="checkbox"  /> */
}
console.log(notes);
console.log(notes[0]);
console.log(notes[1]);
console.log(notes.completed);

// --------------------------------------------
// INPUT.onclick = function () {
//   INPUT.value = "";
// };

// // function render() {}

// // const NOTES = {
// //   title: INPUT.value,
// //   complete: false,
// // }

// document.addEventListener("keyup", (event) => {
//   if (event.code === "Enter") {
//     if (INPUT.value.length === 0) {
//       return;
//     }

//     ArrayList.push(INPUT.value)
//     console.log("Список дел:", ArrayList);
//     LIST.insertAdjacentHTML(
//       "beforeend",
//       `<li class="table__list__text">
//     <div class="table__list__text__item">
//      <input type="checkbox" class="checkbox" id="checkbox" name="checkbox" />
//      <span>${INPUT.value}</span>
//      </div>
//      <div class="table__list__btn">
//      <button class="table__list__btn__good">&check;</button>
//      <button class="table__list__btn__bad">&times;</button>
//       </li>`
//     );

//     // ---------------------------------------------------------------------------------------
//     if (FILTER.length === 1) {
//       FILTER.insertAdjacentHTML = false;
//     } else {
//       FILTER.insertAdjacentHTML(
//         "afterEnd",
//         `<ul>
//           <span class="footer__filter__number" href="#/">${ArrayList.length}пункт</span>
//           <a onclick="openCity(event, 'Все')" id="defaultOpen">Все</a>
//           <a onclick="openCity(event, 'Активные')" id="defaultOpen">Активные</a>
//           <a onclick="openCity(event, 'Выполненые')" id="defaultOpen">Выполненые</a>
//           </ul>`
//       );
//     }

//     INPUT.value = "";
//   }
// });
// -------------------------------------
// document.getElementById("defaultOpen").click();

//   let FILTER = function () {
//     if (ArrayList.length == 0) {
//       return false;
//     } else {
//       FILTER.insertAdjacentHTML(
//         "afterEnd",
//         `<ul
//     <a class="footer__filter__number" href="#/">${ArrayList.length}пункт</a>
//     <a class="footer__filter__menu" href="#/">Все</a>
//     <a class="footer__filter__menu" href="#/">Активные</a>
//     <a class="footer__filter__menu" href="#/">Выполненые</a>
//     </ul>`
//       );
//     }
//   };
// };

// if (ArrayList.length == 0) {
//   return;
// } else {
//   LIST.insertAdjacentHTML(
//     "afterEnd",
//     `<ul
//         <a class="footer__filter__number" href="#/">${ArrayList.length}пункт</a>
//         <a class="footer__filter__menu" href="#/">Все</a>
//         <a class="footer__filter__menu" href="#/">Активные</a>
//         <a class="footer__filter__menu" href="#/">Выполненые</a>
//         </ul>`
//   );
// }
// };
// ---------------------------------------------------------------------------------------
