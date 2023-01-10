// * в модуле "main" навешиваем события на элементы (кнопки, инпуты и т.д.), вызываем функции
//!________________________________________________________
//!________________________________________________________
import {
  loadPage,
  openUserList,
  closeUserList,
  search,
  closeModuleEntry,
  addNewNote,
  openWindowEntryNew,
  editNote,
  checkStatusColor,
  closeStatusMatrix,
  openStatusMatrix,
  colorStatusMatrix,
  checkStatusBoxes,
  clearSearch,
  toggleUserList,
  select,
  start,
  dragAndDrop,
  showCountTodo,
  checkPosishionCards,
  notErrorUser,
  notErrorTitle,
  notErrorContent,
  deleteAll,
} from "./func.js";
//!__________________________________________________________
//!__________________________________________________________

export const app = function () {
  loadPage();
  start();
  dragAndDrop();
  checkPosishionCards();
  showCountTodo();
  document
    .querySelector(".user__select_style")
    .addEventListener("click", function (e) {
      toggleUserList();
    }); //передаем декоративному элементу функцию, которая открывает и закрывает список Users

  for (let elem of document.querySelectorAll(".user__list")) {
    elem.addEventListener("click", select); // передаем элементам списка функцию выбора элемента
    elem.addEventListener("dblclick", toggleUserList); // передаем элементам списка функцию, которая прячет список Users
  }

  window.onload = function () {
    window.setInterval(function () {
      let now = new Date();
      let clock = document.querySelector(".header__clock");
      clock.innerHTML = now.toLocaleTimeString().slice(0, -3);
    }, 1000);
  };
  // !___________________________________________________________
  document
    .querySelector(".entry__title")
    .addEventListener("click", notErrorTitle);
  document
    .querySelector(".entry__content")
    .addEventListener("click", notErrorContent);
  document
    .querySelector(".user__select")
    .addEventListener("click", notErrorUser);

  // !___________________________________________________________

  document.querySelector(".user__select").addEventListener("input", search); // при фокусе "input" происходит вызов функции поиска
  document
    .querySelector(".user__select")
    .addEventListener("input", openUserList); // при фокусе "input" происходит вызов функции и выпадает список "users"

  document.querySelector(".user__select").addEventListener("dblclick", (e) => {
    const target = e.target.className;
    if (target !== "user__select") {
      return;
    }
    {
      clearSearch();
    }
  }); // при фокусе "input" очищается поле ввода

  document
    .querySelector(".module__background")
    .addEventListener("click", () => {
      closeUserList();
      closeStatusMatrix();
    });

  document
    .querySelector(".button__confirm_add")
    .addEventListener("click", addNewNote); // вызывает функцию создания новой карточки с записью данных в массив
  document
    .querySelector(".entry__button_cancel")
    .addEventListener("click", closeModuleEntry); // вызывает функцию закрытия модального окна без сохранения данных

  document
    .querySelector(".button__todo-add")
    .addEventListener("click", openWindowEntryNew); // вызывает функцию вывода на экран модального окна для создания новой карточки

  document
    .querySelector(".button__confirm_edit")
    .addEventListener("click", editNote); //вызывает функцию сохранения информации после редактирования

  document.querySelector(".important").addEventListener("click", () => {
    checkStatusColor();
    colorStatusMatrix();
  }); // вызывает функцию, которая меняет цвет маркера статуса

  document.querySelector(".urgently").addEventListener("click", () => {
    checkStatusColor();
    colorStatusMatrix();
  }); // вызывает функцию, которая меняет цвет маркера статуса

  document
    .querySelector(`[data-color = 'status']`)
    .addEventListener("click", (event) => {
      const target = event.target.dataset.color;
      if (target !== "status") {
        return; //проверяет на каком элементе произошло событие. Если событие происходит на вложенных элементах,у которых отсутствует заданный дата-атрибут, возвращает indefinitely;
      }
      {
        openStatusMatrix(); // вызывает функцию открытия матрицы
      }
    });

  document
  .querySelector(".matrix-window__mark")
  .addEventListener("click", closeStatusMatrix); //вызывает функцию закрытия матрицы

  document
    .querySelector(".radio__status-a")
    .addEventListener("click", checkStatusBoxes); //вызывает функцию изменения статуса "check-boxes"
  document
    .querySelector(".radio__status-b")
    .addEventListener("click", checkStatusBoxes); //вызывает функцию изменения статуса "check-boxes"
  document
    .querySelector(".radio__status-c")
    .addEventListener("click", checkStatusBoxes); //вызывает функцию изменения статуса "check-boxes"
  document
    .querySelector(".radio__status-d")
    .addEventListener("click", checkStatusBoxes); //вызывает функцию изменения статуса "check-boxes"

document.querySelector(".button__done-delete").addEventListener("click", deleteAll);
  };
