// * в модуле "render" добавляем элементы HTML

import {
  getIdCard,
  closeStatusMatrix,
  openStatusMatrix,
  editStatusNote,
  deleteCard,
  moveToRight,
  moveToLeft,
} from "./func.js";

export let createNewCard = function (obj) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("card-todo");
  card.setAttribute("data-key", obj.id);
  card.setAttribute("draggable", "true");

  let head = document.createElement("div");
  head.classList.add("card__head");

  let headCount = document.createElement("div");
  headCount.classList.add("head_count");

  // card.addEventListener("mouseover", () => {
  //   card.classList.add("scale");
  // });
  // card.addEventListener("mouseout", () => {
  //   card.classList.remove("scale");
  // });
  // !___________________________________________________
  // !___________________________________________________
  let colorBlock = document.createElement("div");
  colorBlock.classList.add("head_color");
  colorBlock.classList.add("mark");

  const statusMatrix = document.createElement("div");
  statusMatrix.classList.add("matrix");
  statusMatrix.classList.add("matrix-card");

  const matrixStatusColor = document.createElement("div");
  matrixStatusColor.classList.add("matrix-card__mark");
  matrixStatusColor.classList.add("mark");
  matrixStatusColor.innerText = "End";

  matrixStatusColor.addEventListener("click", (event) => {
    const id = event.target.closest(".card").getAttribute("data-key");
    const status = event.target.getAttribute("data-status");
    statusMatrix.classList.remove("open");
    editStatusNote(id, status);
    console.log("id", id);
    console.log("status", status);
  }); //закрывает матрицу

  statusMatrix.addEventListener("mouseover", () => {
    statusMatrix.classList.add("open");
  });

  statusMatrix.addEventListener("mouseout", (event) => {
    const id = event.target.closest(".card").getAttribute("data-key");
    const status = event.target
      .closest(".head_color")
      .getAttribute("data-status");
    statusMatrix.classList.remove("open");
    editStatusNote(id, status);
    console.log("id", id)
    console.log("status", status)
  }); //закрывает матрицу

  const matrixName = document.createElement("h3");
  matrixName.classList.add("matrix__name_card");
  matrixName.innerText = "The Eisenhower Matrix";

  const itemStatusA = document.createElement("div");
  itemStatusA.classList.add("matrix-card__item");
  itemStatusA.classList.add("matrix__item");
  itemStatusA.classList.add("item__status-a");

  const radioStatusA = document.createElement("input");
  radioStatusA.setAttribute("type", "radio");
  radioStatusA.setAttribute("id", "card-status-a");
  radioStatusA.setAttribute("name", `status ${obj.id}`);
  radioStatusA.classList.add("matrix__status-a");
  radioStatusA.classList.add("matrix__radio");
  radioStatusA.addEventListener("click", () => {
    colorBlock.dataset.status = "a";
    matrixStatusColor.dataset.status = "a";
  });

  const labelStatusA = document.createElement("label");
  labelStatusA.setAttribute("for", "card-status-a");
  labelStatusA.classList.add("matrix__label");
  labelStatusA.innerHTML = "<b>Important & <br>Urgent</b>";

  const itemStatusB = document.createElement("div");
  itemStatusB.classList.add("matrix-card__item");
  itemStatusB.classList.add("matrix__item");
  itemStatusB.classList.add("item__status-b");

  const radioStatusB = document.createElement("input");
  radioStatusB.setAttribute("type", "radio");
  radioStatusB.setAttribute("id", "card-status-b");
  radioStatusB.setAttribute("name", `status ${obj.id}`);
  radioStatusB.classList.add("matrix__status-b");
  radioStatusB.classList.add("matrix__radio");
  radioStatusB.addEventListener("click", () => {
    colorBlock.dataset.status = "b";
    matrixStatusColor.dataset.status = "b";
  });

  const labelStatusB = document.createElement("label");
  labelStatusB.setAttribute("for", "card-status-b");
  labelStatusB.classList.add("matrix__label");
  labelStatusB.innerHTML = "<b>Important & <br>Not urgent</b>";

  const itemStatusC = document.createElement("div");
  itemStatusC.classList.add("matrix-card__item");
  itemStatusC.classList.add("matrix__item");
  itemStatusC.classList.add("item__status-c");

  const radioStatusC = document.createElement("input");
  radioStatusC.setAttribute("type", "radio");
  radioStatusC.setAttribute("id", "card-status-c");
  radioStatusC.setAttribute("name", `status ${obj.id}`);
  radioStatusC.classList.add("matrix__status-c");
  radioStatusC.classList.add("matrix__radio");
  radioStatusC.addEventListener("click", () => {
    colorBlock.dataset.status = "c";
    matrixStatusColor.dataset.status = "c";
  });

  const labelStatusC = document.createElement("label");
  labelStatusC.setAttribute("for", "card-status-c");
  labelStatusC.classList.add("matrix__label");
  labelStatusC.innerHTML = "<b>Not important <br>& Urgent</b>";

  const itemStatusD = document.createElement("div");
  itemStatusD.classList.add("matrix-card__item");
  itemStatusD.classList.add("matrix__item");
  itemStatusD.classList.add("item__status-d");

  const radioStatusD = document.createElement("input");
  radioStatusD.setAttribute("type", "radio");
  radioStatusD.setAttribute("id", "card-status-d");
  radioStatusD.setAttribute("name", `status ${obj.id}`);
  radioStatusD.classList.add("matrix__status-d");
  radioStatusD.classList.add("matrix__radio");
  radioStatusD.addEventListener("click", () => {
    colorBlock.dataset.status = "d";
    matrixStatusColor.dataset.status = "d";
  });

  const labelStatusD = document.createElement("label");
  labelStatusD.setAttribute("for", "card-status-d");
  labelStatusD.classList.add("matrix__label");
  labelStatusD.innerHTML = "<b>Not important <br>& Not urgent</b>";

  switch (obj.status) {
    case "a":
      colorBlock.dataset.status = "a";
      matrixStatusColor.dataset.status = "a";
      radioStatusA.checked = true;
      break;
    case "b":
      colorBlock.dataset.status = "b";
      matrixStatusColor.dataset.status = "b";
      radioStatusB.checked = true;
      break;
    case "c":
      colorBlock.dataset.status = "c";
      matrixStatusColor.dataset.status = "c";
      radioStatusC.checked = true;
      break;
    case "d":
      colorBlock.dataset.status = "d";
      matrixStatusColor.dataset.status = "d";
      radioStatusD.checked = true;
      break;
  }
  colorBlock.addEventListener("click", (event) => {
    const target = event.target.getAttribute("class");
    if (target !== "head_color mark") {
      return;
    }
    {
      statusMatrix.classList.add("open");
    }
  });

  colorBlock.append(statusMatrix);
  statusMatrix.append(
    matrixStatusColor,
    matrixName,
    itemStatusA,
    itemStatusB,
    itemStatusC,
    itemStatusD
  );
  itemStatusA.append(radioStatusA, labelStatusA);
  itemStatusB.append(radioStatusB, labelStatusB);
  itemStatusC.append(radioStatusC, labelStatusC);
  itemStatusD.append(radioStatusD, labelStatusD);

  // !________________________________________________
  // !________________________________________________
  let title = document.createElement("p");
  title.classList.add("head__title");
  title.innerHTML = obj.title;

  let headBtn = document.createElement("div");
  headBtn.classList.add("head__buttons");

  let btnEdit = document.createElement("button");
  btnEdit.classList.add("buttons__edit");
  btnEdit.classList.add("button-card");
  btnEdit.innerHTML = "Edit";
  btnEdit.addEventListener("click", getIdCard); //вызов окна редактирования карточки

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("buttons__delete");
  btnDelete.classList.add("button-card");
  btnDelete.innerHTML = "Delete";
  btnDelete.addEventListener("click", deleteCard); //вызов удаления карты

  let text = document.createElement("div");
  text.classList.add("card__text");

  let descript = document.createElement("p");
  descript.classList.add("text__description");
  descript.innerHTML = obj.content;

  let btnNextCont = document.createElement("div");
  btnNextCont.classList.add("text__btnCont");

  let btnNext1 = document.createElement("button");
  btnNext1.classList.add("text__next-left");
  btnNext1.classList.add("button-card");
  btnNext1.innerHTML = "&#60;";
  btnNext1.addEventListener("click", moveToLeft);

  let btnNext2 = document.createElement("button");
  btnNext2.classList.add("text__next-right");
  btnNext2.classList.add("button-card");
  btnNext2.innerHTML = "&#62;";
  btnNext2.addEventListener("click", moveToRight); //!кнопка перемещения

  let data = document.createElement("div");
  data.classList.add("card__data");

  let user = document.createElement("p");
  user.classList.add("data__user");
  user.innerHTML = obj.user;

  let time = document.createElement("p");
  time.classList.add("data__time");
  time.innerHTML = obj.data;

  document.querySelector(".panel__todo").appendChild(card);
  card.append(head, text, data);
  head.append(headCount, headBtn);
  headCount.append(colorBlock, title);
  headBtn.append(btnEdit, btnDelete);
  text.append(descript, btnNextCont);
  btnNextCont.append(btnNext1, btnNext2);
  data.append(user, time);
};

// !___________________________________________________
