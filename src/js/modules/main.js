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
  closeStatusMatrix,
  openStatusMatrix,
  colorStatusMatrix,
  checkStatusBoxes,
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

  document.querySelector(".important").addEventListener("click", () => {
    checkStatusColor();
    colorStatusMatrix();
  }); // вызывает функцию, которая меняет цвет маркера статуса

  document.querySelector(".urgently").addEventListener("click", () => {
    checkStatusColor();
    colorStatusMatrix();
  }); // вызывает функцию, которая меняет цвет маркера статуса

  document
    .querySelector(".entry__status_color")
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
    .querySelector(".matrix__end")
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
};
