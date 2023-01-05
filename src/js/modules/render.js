// * в модуле "render" добавляем элементы HTML

import { getIdCard, closeStatusMatrix, openStatusMatrix } from "./func.js";

// !___________________________________________________
// !___________________________________________________
// const createStatusMatrix = function () {
//   const headColor = document.querySelector(".head_color");
//   const statusHeadColor = headColor.getAttribute("data-status");

//   const statusMatrix = document.createElement("div");
//   statusMatrix.classList.add("status__matrix");
//   statusMatrix.classList.add("open");

//   const matrixStatusColor = document.createElement("div");
//   matrixStatusColor.classList.add("matrix__status_color");
//   matrixStatusColor.classList.add("status__color");
//   matrixStatusColor.innerText = "End";

//   matrixStatusColor.addEventListener("click", closeStatusMatrix); //вызывает функцию закрытия матрицы

//   switch (statusHeadColor) {
//     case "a":
//       matrixStatusColor.dataset.status = "a";
//       break;
//     case "b":
//       matrixStatusColor.dataset.status = "b";
//       break;
//     case "c":
//       matrixStatusColor.dataset.status = "c";
//       break;
//     case "d":
//       matrixStatusColor.dataset.status = "d";
//       break;
//   }

//   const matrixName = document.createElement("h3");
//   matrixName.classList.add("matrix__name");
//   matrixName.innerText = "The Eisenhower Matrix";

//   const matrixX1 = document.createElement("p");
//   matrixX1.classList.add("matrix__x1");
//   matrixX1.classList.add("matrix__x");
//   matrixX1.innerText = "Urgent";

//   const matrixX2 = document.createElement("p");
//   matrixX2.classList.add("matrix__x2");
//   matrixX2.classList.add("matrix__x");
//   matrixX2.innerText = "Not urgent";

//   const matrixY1 = document.createElement("p");
//   matrixY1.classList.add("matrix__y1");
//   matrixY1.classList.add("matrix__y");
//   matrixY1.innerText = "Important";

//   const itemStatusA = document.createElement("div");
//   itemStatusA.classList.add("matrix__item");
//   itemStatusA.classList.add("item__status-a");

//   const radioStatusA = document.createElement("input");
//   radioStatusA.setAttribute("type", "radio");
//   radioStatusA.setAttribute("id", "status-a");
//   radioStatusA.setAttribute("name", "status");
//   radioStatusA.classList.add("matrix__status-a");
//   radioStatusA.classList.add("matrix__radio");

//   const labelStatusA = document.createElement("label");
//   labelStatusA.setAttribute("for", "status-a");
//   labelStatusA.classList.add("matrix__label");
//   labelStatusA.innerHTML = "<b>Do: </b>Tasks with deadlines or consequences.";

//   const itemStatusB = document.createElement("div");
//   itemStatusB.classList.add("matrix__item");
//   itemStatusB.classList.add("item__status-b");

//   const radioStatusB = document.createElement("input");
//   radioStatusB.setAttribute("type", "radio");
//   radioStatusB.setAttribute("id", "status-b");
//   radioStatusB.setAttribute("name", "status");
//   radioStatusB.classList.add("matrix__status-b");
//   radioStatusB.classList.add("matrix__radio");

//   const labelStatusB = document.createElement("label");
//   labelStatusB.setAttribute("for", "status-b");
//   labelStatusB.classList.add("matrix__label");
//   labelStatusB.innerHTML =
//     "<b>Schedule: </b>Tasks with unclear deadlines that contribute to long-term success.";

//   const matrixY2 = document.createElement("p");
//   matrixY2.classList.add("matrix__y2");
//   matrixY2.classList.add("matrix__y");
//   matrixY2.innerText = "Not important";

//   const itemStatusC = document.createElement("div");
//   itemStatusC.classList.add("matrix__item");
//   itemStatusC.classList.add("item__status-c");

//   const radioStatusC = document.createElement("input");
//   radioStatusC.setAttribute("type", "radio");
//   radioStatusC.setAttribute("id", "status-c");
//   radioStatusC.setAttribute("name", "status");
//   radioStatusC.classList.add("matrix__status-c");
//   radioStatusC.classList.add("matrix__radio");

//   const labelStatusC = document.createElement("label");
//   labelStatusC.setAttribute("for", "status-c");
//   labelStatusC.classList.add("matrix__label");
//   labelStatusC.innerHTML =
//     "<b>Delegate: </b>Tasks that must get done but don't require your specific skill set.";

//   const itemStatusD = document.createElement("div");
//   itemStatusD.classList.add("matrix__item");
//   itemStatusD.classList.add("item__status-d");

//   const radioStatusD = document.createElement("input");
//   radioStatusD.setAttribute("type", "radio");
//   radioStatusD.setAttribute("id", "status-d");
//   radioStatusD.setAttribute("name", "status");
//   radioStatusD.classList.add("matrix__status-d");
//   radioStatusD.classList.add("matrix__radio");

//   const labelStatusD = document.createElement("label");
//   labelStatusD.setAttribute("for", "status-d");
//   labelStatusD.classList.add("matrix__label");
//   labelStatusD.innerHTML = "<b>Delete: </b>Distractions and unnecessary tasks.";

//   headColor.append(statusMatrix);
//   statusMatrix.append(
//     matrixStatusColor,
//     matrixName,
//     matrixX1,
//     matrixX2,
//     matrixY1,
//     itemStatusA,
//     itemStatusB,
//     matrixY2,
//     itemStatusC,
//     itemStatusD
//   );
//   itemStatusA.append(radioStatusA, labelStatusA);
//   itemStatusB.append(radioStatusB, labelStatusB);
//   itemStatusC.append(radioStatusC, labelStatusC);
//   itemStatusD.append(radioStatusD, labelStatusD);
// };
// !___________________________________________________

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
  // !___________________________________________________
  // !___________________________________________________
  let colorBlock = document.createElement("div");
  colorBlock.classList.add("head_color");
  colorBlock.classList.add("mark");

  const statusMatrix = document.createElement("div");
  statusMatrix.classList.add("matrix");

  const matrixStatusColor = document.createElement("div");
  matrixStatusColor.classList.add("matrix__mark");
  matrixStatusColor.classList.add("matrix__mark_card");
  matrixStatusColor.classList.add("mark");
  matrixStatusColor.innerText = "End";
  matrixStatusColor.addEventListener("click", closeStatusMatrix); //вызывает функцию закрытия матрицы

  switch (obj.status) {
    case "a":
      colorBlock.dataset.status = "a";
      matrixStatusColor.dataset.status = "a";
      break;
    case "b":
      colorBlock.dataset.status = "b";
      matrixStatusColor.dataset.status = "b";
      break;
    case "c":
      colorBlock.dataset.status = "c";
      matrixStatusColor.dataset.status = "c";
      break;
    case "d":
      colorBlock.dataset.status = "d";
      matrixStatusColor.dataset.status = "d";
      break;
  }
  const statusColorBlock = colorBlock.getAttribute("data-status");
  const statusMatrixStatusColor = matrixStatusColor.getAttribute("data-status");


  colorBlock.addEventListener("click", (event) => {
    const target = event.target.getAttribute("class");
    if (target !== "head_color mark") {
      return;
    }
    {
      console.log(statusColorBlock);
      console.log("statusMatrixStatusColor", statusMatrixStatusColor);
      statusMatrix.classList.add("open");
    }
  });

  const matrixName = document.createElement("h3");
  matrixName.classList.add("matrix__name");
  matrixName.innerText = "The Eisenhower Matrix";

  const matrixX1 = document.createElement("p");
  matrixX1.classList.add("matrix__x1");
  matrixX1.classList.add("matrix__x");
  matrixX1.innerText = "Urgent";

  const matrixX2 = document.createElement("p");
  matrixX2.classList.add("matrix__x2");
  matrixX2.classList.add("matrix__x");
  matrixX2.innerText = "Not urgent";

  const matrixY1 = document.createElement("p");
  matrixY1.classList.add("matrix__y1");
  matrixY1.classList.add("matrix__y");
  matrixY1.innerText = "Important";

  const itemStatusA = document.createElement("div");
  itemStatusA.classList.add("matrix__item");
  itemStatusA.classList.add("item__status-a");

  const radioStatusA = document.createElement("input");
  radioStatusA.setAttribute("type", "radio");
  radioStatusA.setAttribute("id", "status-a");
  radioStatusA.setAttribute("name", "status");
  radioStatusA.classList.add("matrix__status-a");
  radioStatusA.classList.add("matrix__radio");

  const labelStatusA = document.createElement("label");
  labelStatusA.setAttribute("for", "status-a");
  labelStatusA.classList.add("matrix__label");
  labelStatusA.innerHTML = "<b>Do: </b>Tasks with deadlines or consequences.";

  const itemStatusB = document.createElement("div");
  itemStatusB.classList.add("matrix__item");
  itemStatusB.classList.add("item__status-b");

  const radioStatusB = document.createElement("input");
  radioStatusB.setAttribute("type", "radio");
  radioStatusB.setAttribute("id", "status-b");
  radioStatusB.setAttribute("name", "status");
  radioStatusB.classList.add("matrix__status-b");
  radioStatusB.classList.add("matrix__radio");

  const labelStatusB = document.createElement("label");
  labelStatusB.setAttribute("for", "status-b");
  labelStatusB.classList.add("matrix__label");
  labelStatusB.innerHTML =
    "<b>Schedule: </b>Tasks with unclear deadlines that contribute to long-term success.";

  const matrixY2 = document.createElement("p");
  matrixY2.classList.add("matrix__y2");
  matrixY2.classList.add("matrix__y");
  matrixY2.innerText = "Not important";

  const itemStatusC = document.createElement("div");
  itemStatusC.classList.add("matrix__item");
  itemStatusC.classList.add("item__status-c");

  const radioStatusC = document.createElement("input");
  radioStatusC.setAttribute("type", "radio");
  radioStatusC.setAttribute("id", "status-c");
  radioStatusC.setAttribute("name", "status");
  radioStatusC.classList.add("matrix__status-c");
  radioStatusC.classList.add("matrix__radio");

  const labelStatusC = document.createElement("label");
  labelStatusC.setAttribute("for", "status-c");
  labelStatusC.classList.add("matrix__label");
  labelStatusC.innerHTML =
    "<b>Delegate: </b>Tasks that must get done but don't require your specific skill set.";

  const itemStatusD = document.createElement("div");
  itemStatusD.classList.add("matrix__item");
  itemStatusD.classList.add("item__status-d");

  const radioStatusD = document.createElement("input");
  radioStatusD.setAttribute("type", "radio");
  radioStatusD.setAttribute("id", "status-d");
  radioStatusD.setAttribute("name", "status");
  radioStatusD.classList.add("matrix__status-d");
  radioStatusD.classList.add("matrix__radio");

  const labelStatusD = document.createElement("label");
  labelStatusD.setAttribute("for", "status-d");
  labelStatusD.classList.add("matrix__label");
  labelStatusD.innerHTML = "<b>Delete: </b>Distractions and unnecessary tasks.";

  colorBlock.append(statusMatrix);
  statusMatrix.append(
    matrixStatusColor,
    matrixName,
    matrixX1,
    matrixX2,
    matrixY1,
    itemStatusA,
    itemStatusB,
    matrixY2,
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

  let btnNext2 = document.createElement("button");
  btnNext2.classList.add("text__next-right");
  btnNext2.classList.add("button-card");
  btnNext2.innerHTML = "&#62;";

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
