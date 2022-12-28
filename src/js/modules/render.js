// * в модуле "render" добавляем элементы HTML
export let createNewCard = function(obj){
    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("card-todo")
    card.setAttribute("data-key", obj.id);
    card.setAttribute("draggable", "true");
  
    let head = document.createElement("div")
    head.classList.add("card__head")
    
    let headCount = document.createElement("div")
    headCount .classList.add("head_count")
  
    let colorblock = document.createElement("div")
    colorblock.classList.add("head_color")
  
    let title = document.createElement("p")
    title.classList.add("head__title")
    title.innerHTML = obj.title
  
    let headBtn = document.createElement("div")
    headBtn.classList.add("head__buttons")
  
    let btnEdit = document.createElement("button")
    btnEdit.classList.add("buttons__edit")
    btnEdit.classList.add("button-card")
    btnEdit.innerHTML = "Edit"
  
    let btnDelete = document.createElement("button")
    btnDelete.classList.add("buttons__delete")
    btnDelete.classList.add("button-card")
    btnDelete.innerHTML = "Delete"
  
    let text = document.createElement("div")
    text.classList.add("card__text")
  
    let descript = document.createElement("p") 
    descript.classList.add("text__description")
    descript.innerHTML = obj.content
  
    let btnNextCont = document.createElement("div")
    btnNextCont.classList.add("text__btnCont")
  
    let btnNext1 = document.createElement("button")
    btnNext1.classList.add("text__next-left")
    btnNext1.classList.add("button-card")
    btnNext1.innerHTML = "&#60;"
  
    let btnNext2 = document.createElement("button")
    btnNext2.classList.add("text__next-right")
    btnNext2.classList.add("button-card")
    btnNext2.innerHTML = "&#62;"
  
    let data = document.createElement("div") 
    data.classList.add("card__data")
  
    let user = document.createElement("p") 
    user.classList.add("data__user")
    user.innerHTML = obj.user
  
    let time = document.createElement("p") 
    time.classList.add("data__time")
    time.innerHTML = obj.data
  
  
    document.querySelector(".panel__todo").appendChild(card)
    card.append(head, text, data)
    head.append(headCount, headBtn)
    headCount.append(colorblock,title)
    headBtn.append(btnEdit, btnDelete)
    text.append(descript, btnNextCont)
    btnNextCont.append(btnNext1, btnNext2)
    data.append(user, time)
  
  }