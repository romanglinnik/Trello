// * в модуле "func" создаем основной функционал
//!_____________________________________________________
//!_____________________________________________________

import { createNewCard } from "./render.js";

let noteAll = [
  {
    id: 1,
    title: "work",
    content: "draw up a report",
    user: "Ervin Howell",
    data: "19.12.2022",
    status: "a",
    position: "todo",
  },
  {
    id: 2,
    title: "work",
    content: "give a presentation",
    user: "Clementine Bauch",
    data: "19.12.2022",
    status: "b",
    position: "in progress",
  },
  {
    id: 3,
    title: "home",
    content: "drink coffee",
    user: "Glenna Reichert",
    data: "19.12.2022",
    status: "d",
    position: "done",
  },
];
// !_________________________________________________________
// !_________________________________________________________
// отрисовка выпадающего списка
export const select = function (e) {
  const name = e.target.getAttribute("data-name"); // Считываем значение выбранного элемента
  const nodes = e.target.parentNode.childNodes; // Получаем все остальные элементы
  for (let i = 0; i < nodes.length; i++) {
    /* Отфильтровываем посторонние элементы text и input */
    if (nodes[i] instanceof HTMLParagraphElement) {
      /* Добавляем active у выбранного элемента, удаляя данный класс у всех остальных */
      if (name == nodes[i].getAttribute("data-name"))
        nodes[i].classList.add(`active`);
      else nodes[i].classList.remove(`active`);
    }
  }
  document.getElementById("user_select").value = name; // Устанавливаем в user-select выбранное значение
};

export const toggleUserList = function () {
  const userList = document.querySelector(".user__list");
  userList.classList.toggle("open"); //добавляем класс open, если его нет и удаляем, если он есть
};

export const openUserList = function () {
  const userList = document.querySelector(".user__list");
  userList.classList.add("open"); //добавляем класс open, если его нет и удаляем, если он есть
};

export const closeUserList = function () {
  const userList = document.querySelector(".user__list");
  userList.classList.remove("open"); //добавляем класс open, если его нет и удаляем, если он есть
};

//!_______________________________________________
// !_______________________________________________
// функция отрисовки списка users
const createUserList = function (obj) {
  const userList = document.querySelector(".user__list");
  const userListItem = document.createElement("p");
  userListItem.classList.add("user__list_item");
  userListItem.setAttribute("data-value", obj.id);
  userListItem.setAttribute("data-name", obj.name);
  userListItem.innerHTML = `${obj.name}`;

  userList.append(userListItem);
};

const userName = function (obj) {
  for (let i = 0; i < obj.length; i++) {
    createUserList(obj[i]);
  }
};
// !___________________________________________________
// функция запрашивает данные с сервера и вызывает функцию отрисовки списка users
const userURL = `https://jsonplaceholder.typicode.com/users`;

const sendRequest = function (method, url) {
  return fetch(url).then((response) => {
    return response.json();
  });
};

sendRequest("GET", userURL)
  .then((data) => userName(data))
  .catch((error) => console.log(error));
//!_______________________________________________
//!_______________________________________________
// функция поиска user в списке
export const search = function (e) {
  const searchValue = e.target.value.trim().toLocaleLowerCase();
  const userList = document.querySelector(".user__list");
  const nodeUserList = userList.childNodes;

  for (let i = 0; i < nodeUserList.length; i++) {
    if (nodeUserList[i] instanceof HTMLParagraphElement) {
      const user = nodeUserList[i]
        .getAttribute("data-name")
        .toLocaleLowerCase();
      nodeUserList[i].classList.remove("close");
      if (!user.includes(searchValue)) {
        nodeUserList[i].classList.add("close");
      }
    }
  }
};
//!___________________________________________________
//!___________________________________________________
// функция очистки поиска
export const clearSearch = function () {
  const userSelect = document.querySelector(".user__select");
  userSelect.value = "";
};
//!___________________________________________________
//!___________________________________________________
// функция очистки и закрытия модального окна для ввода информации
export const closeModuleEntry = function () {
  const removeTextTitle = document.querySelector(".entry__title");
  const removeTextContent = document.querySelector(".entry__content");
  const removeTextUser = document.querySelector(".user__select");
  const moduleEntry = document.querySelector(".module__entry");
  const removeCheckImportant = document.querySelector(".important");
  const removeCheckUrgently = document.querySelector(".urgently");
  removeTextTitle.value = "";
  removeTextContent.value = "";
  removeTextUser.value = "";
  removeCheckImportant.checked = false;
  removeCheckUrgently.checked = false;
  moduleEntry.classList.remove("open"); //удаляем класс open
  checkStatusColor();
  closeUserList();
  closeStatusMatrix();
};

// !__________________________________________________
// !__________________________________________________

export const getIdCard = function (event) {
  const parent = event.target.closest(".card-todo");
  const cardId = parent.getAttribute("data-key");
  extractDataFromCard(cardId); //- функция требует доработки
  openWindowEntryEdit(cardId);
};
//!________________________________________________________________
// !_______________________________________________________________
// вызов окна редактирования задачи (вызывает функцию извлечения информации из карточки)
export const openWindowEntryEdit = function (cardId) {
  const buttonConfirmAdd = document.querySelector(".button__confirm_add");
  const buttonConfirmEdit = document.querySelector(".button__confirm_edit");
  buttonConfirmEdit.classList.add("open");
  buttonConfirmEdit.setAttribute("data-key", cardId);
  buttonConfirmAdd.classList.remove("open");
  const windowEntry = document.querySelector(".module__entry");
  windowEntry.classList.add("open");
  checkStatusColor(); //функция окрашивания маркера
};
//!________________________________________________________________
// !_______________________________________________________________
// функция открытия матрицы Эйзенхауэра
export const openStatusMatrix = function (e) {
  const statusMatrix = document.querySelector(".matrix-window");
  statusMatrix.classList.add("open");
  console.log(statusMatrix)
  colorStatusMatrix();
};

//!___________________________________________________
//!___________________________________________________
// проверка input на пустые значения
const checkNodeValue = function (value) {
  if (value === "" || value === " ") {
    return false;
  } else {
    return true;
  }
};

//*____________________________________________
// проверке input user на соответствие списку users
const checkUserValue = function (value) {
  const userList = document.querySelector(".user__list");
  const nodeUserList = userList.childNodes;
  const userAll = [];
  for (let i = 0; i < nodeUserList.length; i++) {
    if (nodeUserList[i] instanceof HTMLParagraphElement) {
      let user = nodeUserList[i].getAttribute("data-name");
      userAll.push(user);
    }
  }
  return userAll.includes(value);
};
//*____________________________________________
export const addNewNote = function () {
  let title = document.querySelector(".entry__title").value;
  let descript = document.querySelector(".entry__content").value;
  let user = document.querySelector(".user__select").value;
  const allId = noteAll.map((item) => item.id);
  allId.sort((a, b) => a - b);
  let maxId = 0;
  if (allId.length == 0) {
    maxId = 1;
  } else {
    maxId = +allId.at(-1) + 1;
  }

  const note = {
    id: maxId,
    title: title,
    content: descript,
    user: user,
    data: `${new Date().toLocaleDateString()}`,
    status: checkStatus(),
    position: "todo",
  };

  if (
    checkNodeValue(title) &&
    checkNodeValue(descript) &&
    checkNodeValue(user) &&
    checkUserValue(user)
  ) {
    noteAll.unshift(note);
    createNewCard(note); //вызывается функция отрисовки колонок
    dragAndDrop();
    // updateStorage(); //необходимо вызвать функцию сохранения данных
    closeModuleEntry();
  } else {
    alert("не заполнены поля");
  }
};
//!______________добавление_данных_из_массива_________

export const start = function () {
  for (let i = 0; i < noteAll.length; i++) {
    createNewCard(noteAll[i]);
  }
};
//!__________________________________________________________
//!__________________________________________________________
// проверка на "важность" и "срочность"
const checkStatus = function () {
  const elementImportant = document.querySelector(".important");
  const checkImportant = elementImportant.checked;
  const elementUrgently = document.querySelector(".urgently");
  const checkUrgently = elementUrgently.checked;
  if (checkImportant && checkUrgently) {
    return "a";
  } else if (!checkImportant && checkUrgently) {
    return "b";
  } else if (checkImportant && !checkUrgently) {
    return "c";
  } else if (!checkImportant && !checkUrgently) {
    return "d";
  }
};
//!________________________________________________________________
// !_______________________________________________________________
// функция окрашивания маркера
export const checkStatusColor = function () {
  const elementImportant = document.querySelector(".important");
  const checkImportant = elementImportant.checked;
  const elementUrgently = document.querySelector(".urgently");
  const checkUrgently = elementUrgently.checked;
  const colorStatus = document.querySelector(".entry__mark");
  if (checkImportant && checkUrgently) {
    colorStatus.dataset.status = "a";
  } else if (!checkImportant && checkUrgently) {
    colorStatus.dataset.status = "b";
  } else if (checkImportant && !checkUrgently) {
    colorStatus.dataset.status = "c";
  } else if (!checkImportant && !checkUrgently) {
    colorStatus.dataset.status = "d";
  }
};

//!________________________________________________________________
// !_______________________________________________________________
// функция закрытия матрицы Эйзенхауэра
export const closeStatusMatrix = function () {
  const statusMatrix = document.querySelector(".matrix-window");
  statusMatrix.classList.remove("open");
};
//!________________________________________________________________
// !_______________________________________________________________
// функция окрашивания ячейки матрицы при изменении статуса "check-boxes"
export const colorStatusMatrix = function () {
  const elementImportant = document.querySelector(".important");
  const checkImportant = elementImportant.checked;
  const elementUrgently = document.querySelector(".urgently");
  const checkUrgently = elementUrgently.checked;
  const radioStatusA = document.querySelector(".radio__status-a");
  const radioStatusB = document.querySelector(".radio__status-b");
  const radioStatusC = document.querySelector(".radio__status-c");
  const radioStatusD = document.querySelector(".radio__status-d");
  const colorStatus = document.querySelector(".entry__mark");
  const colorStatusMatrix = document.querySelector(".matrix-window__mark");

  if (checkImportant && checkUrgently) {
    radioStatusA.checked = true;
    colorStatus.dataset.status = "a";
    colorStatusMatrix.dataset.status = "a";
  } else if (!checkImportant && checkUrgently) {
    radioStatusB.checked = true;
    colorStatus.dataset.status = "b";
    colorStatusMatrix.dataset.status = "b";
  } else if (checkImportant && !checkUrgently) {
    radioStatusC.checked = true;
    colorStatus.dataset.status = "c";
    colorStatusMatrix.dataset.status = "c";
  } else if (!checkImportant && !checkUrgently) {
    radioStatusD.checked = true;
    colorStatus.dataset.status = "d";
    colorStatusMatrix.dataset.status = "d";
  }
};
//!________________________________________________________________
// !_______________________________________________________________
// функция которая возвращает статус"check-boxes" при выборе ячейки матрицы
export const checkStatusBoxes = function () {
  const checkImportant = document.querySelector(".important");
  const checkUrgently = document.querySelector(".urgently");
  const radioStatusA = document.querySelector(".radio__status-a");
  const radioStatusB = document.querySelector(".radio__status-b");
  const radioStatusC = document.querySelector(".radio__status-c");
  const radioStatusD = document.querySelector(".radio__status-d");
  const colorStatusMatrix = document.querySelector(".matrix-window__mark");
  const colorStatus = document.querySelector(".entry__mark");
  if (radioStatusA.checked) {
    checkImportant.checked = true;
    checkUrgently.checked = true;
    colorStatus.dataset.status = "a";
    colorStatusMatrix.dataset.status = "a";
  } else if (radioStatusB.checked) {
    checkImportant.checked = false;
    checkUrgently.checked = true;
    colorStatus.dataset.status = "b";
    colorStatusMatrix.dataset.status = "b";
  } else if (radioStatusC.checked) {
    checkImportant.checked = true;
    checkUrgently.checked = false;
    colorStatus.dataset.status = "c";
    colorStatusMatrix.dataset.status = "c";
  } else if (radioStatusD.checked) {
    checkImportant.checked = false;
    checkUrgently.checked = false;
    colorStatus.dataset.status = "d";
    colorStatusMatrix.dataset.status = "d";
  }
};
//!________________________________________________________________
// !_______________________________________________________________
// вызов окна добавления новой задачи
export const openWindowEntryNew = function () {
  const buttonConfirmAdd = document.querySelector(".button__confirm_add");
  const buttonConfirmEdit = document.querySelector(".button__confirm_edit");
  buttonConfirmEdit.classList.remove("open");
  buttonConfirmAdd.classList.add("open");
  const windowEntry = document.querySelector(".module__entry");
  windowEntry.classList.add("open");
};

// !________________________________________________________________
// функция вывода модального окна для редактирования информации
const extractDataFromCard = function (cardId) {
  const addTitle = document.querySelector(".entry__title");
  const addContent = document.querySelector(".entry__content");
  const addUser = document.querySelector(".user__select");
  const checkImportant = document.querySelector(".important");
  const checkUrgently = document.querySelector(".urgently");
  for (let i = 0; i < noteAll.length; i++) {
    if (noteAll[i].id === +cardId) {
      addTitle.value = noteAll[i].title;
      addContent.value = noteAll[i].content;
      addUser.value = noteAll[i].user;
      switch (noteAll[i].status) {
        case "a":
          checkImportant.checked = true;
          checkUrgently.checked = true;
          break;
        case "b":
          checkImportant.checked = false;
          checkUrgently.checked = true;
          break;
        case "c":
          checkImportant.checked = true;
          checkUrgently.checked = false;
          break;
        case "d":
          checkImportant.checked = false;
          checkUrgently.checked = false;
          break;
      }
    }
  }
  console.log("noteAll start", noteAll);
};
//!_____________________________________________________________________
//!_____________________________________________________________________
// функция изменения карточки после редактирования контента
const editCard = function (obj) {
  const card = document.querySelector(`[data-key = '${obj.id}']`);
  const title = card.querySelector(".head__title");
  title.innerHTML = obj.title;
  const content = card.querySelector(".text__description");
  content.innerHTML = obj.content;
  const user = card.querySelector(".data__user");
  user.innerHTML = obj.user;
  const colorBlock = card.querySelector(".mark");
  switch (obj.status) {
    case "a":
      colorBlock.dataset.status = "a";
      break;
    case "b":
      colorBlock.dataset.status = "b";
      break;
    case "c":
      colorBlock.dataset.status = "c";
      break;
    case "d":
      colorBlock.dataset.status = "d";
      break;
  }
};

//!_____________________________________________________________________
//!_____________________________________________________________________
//функция сохранения информации после редактирования
export const editNote = function (event) {
  const cardId = event.target.getAttribute("data-key");
  const addTitle = document.querySelector(".entry__title");
  const addContent = document.querySelector(".entry__content");
  const addUser = document.querySelector(".user__select");
  const titleValue = addTitle.value;
  const contentValue = addContent.value;
  const userValue = addUser.value;
  if (
    checkNodeValue(titleValue) &&
    checkNodeValue(contentValue) &&
    checkNodeValue(userValue) &&
    checkUserValue(userValue)
  ) {
    for (let i = 0; i < noteAll.length; i++) {
      if (noteAll[i].id === +cardId) {
        noteAll[i].title = addTitle.value;
        noteAll[i].content = addContent.value;
        noteAll[i].user = addUser.value;
        noteAll[i].status = checkStatus();
      }
    }
    const note = {
      id: +cardId,
      title: addTitle.value,
      content: addContent.value,
      user: addUser.value,
      status: checkStatus(),
    };
    editCard(note);
    closeModuleEntry();
    // updateStorage(); //необходимо вызвать функцию сохранения данных
  } else {
    alert("не заполнены поля");
  }

  console.log("noteAll finish", noteAll);
};
//!__________________________________________________________
//!__________________________________________________________
//!_______Смена_стилей_карточек_при_перетаскивании___

let changeClassCards = function (item) {
  let inProgress = document.querySelector(".panel__progress");
  let done = document.querySelector(".panel__done");

  let btnLeft = dragItem.querySelector(".text__next-left");
  let btnRight = dragItem.querySelector(".text__next-right");
  let btnEdit = dragItem.querySelector(".buttons__edit");
  if (item.classList == inProgress.classList) {
    dragItem.classList.add("card-progress");
    dragItem.classList.remove("card-todo");
    dragItem.classList.remove("card-done");
    btnLeft.style.display = "block";
    btnRight.style.display = "block";
    btnEdit.style.display = "none";
  } else if (item.classList == done.classList) {
    dragItem.classList.add("card-done");
    dragItem.classList.remove("card-todo");
    dragItem.classList.remove("card-progress");
    btnLeft.style.display = "block";
    btnRight.style.display = "none";
    btnEdit.style.display = "none";
  } else {
    dragItem.classList.add("card-todo");
    dragItem.classList.remove("card-progress");
    dragItem.classList.remove("card-done");
    btnLeft.style.display = "none";
    btnRight.style.display = "block";
    btnEdit.style.display = "inline-block";
  }
};

//!___________________Перетаскивание_карточек_(drag_&_drop)___

let dragItem = null;

export let dragAndDrop = function () {
  let listItem = document.querySelectorAll(".card");
  let lists = document.querySelectorAll(".column__panel");

  listItem.forEach(function (item) {
    let id = +item.getAttribute("data-key");
    let productId = noteAll.find((item) => item.id === id);
    if (productId.id == id) {
      const item1 = item;

      item1.addEventListener("dragstart", (e) => {
        dragItem = item1;

        setTimeout(() => {
          item1.classList.add("hide");
        }, 0);
      });
      item1.addEventListener("dragend", () => {
        setTimeout(() => {
          item1.classList.remove("hide");
          dragItem = null;
        }, 0);
      });

      for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener("dragover", (e) => e.preventDefault());

        list.addEventListener("dragenter", function (e) {
          e.preventDefault();
          this.style.backgroundColor = `rgba(0,0,0,.3)`;
          this.style.borderRadius = `15px`;
        });
        list.addEventListener("dragleave", function (e) {
          this.style.backgroundColor = `rgba(0,0,0,0)`;
        });
        list.addEventListener("drop", function (e) {
          e.preventDefault();
          this.style.backgroundColor = `rgba(0,0,0,0)`;

          changeClassCards(this);
          this.append(dragItem);
        });
      }
    }
  });
};

