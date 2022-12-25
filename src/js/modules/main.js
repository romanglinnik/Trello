// * в модуле "main" навешиваем события на элементы (кнопки, инпуты и т.д.), вызываем функции
//!________________________________________________________
//!________________________________________________________
import {
  closeUserList,
  search,
  closeModuleEntry,
  addNewNote,
  openWindowEntryNew,
  openWindowEntryEdit,
  editNote,
  checkStatusColor,
} from "./func.js";
//!__________________________________________________________
//!__________________________________________________________
export const app = function () {
  document.querySelector(".user__select").addEventListener("input", search); // при фокусе "input" происходит вызов функции поиска
  document
    .querySelector(".user__select")
    .addEventListener("input", closeUserList); // при фокусе "input" происходит вызов функции и выпадает список "users"

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
    .querySelector(".button__edit")
    .addEventListener("click", openWindowEntryEdit); //вызов окна редактирования карточки

  document
    .querySelector(".button__confirm_edit")
    .addEventListener("click", editNote); //вызывает функцию сохранения информации после редактирования

  document
    .querySelector(".important")
    .addEventListener("click", checkStatusColor); // вызывает функцию, которая меняет цвет маркера статуса

  document
    .querySelector(".urgently")
    .addEventListener("click", checkStatusColor); // вызывает функцию, которая меняет цвет маркера статуса
};
