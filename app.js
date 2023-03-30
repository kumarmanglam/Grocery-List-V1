const inputItem = document.getElementById("input-item");
const addBtn = document.getElementById("addBtn");
const delBtn = document.querySelector(".delBtn");
const listItems = document.querySelector('.list-items');

let list = [];

addBtn.addEventListener("click", ()=> {
  if(inputItem.value){
    list.push(inputItem.value);
    console.log(list);
    renderList();
    inputItem.value='';
    inputItem.focus();
  }
});

function renderList(){
  listItems.innerHTML = '';
  for(let i=0;i<list.length;i++){
    const item = list[i];
    let newItem = document.createElement('li');
    newItem.classList.add = "item";
    newItem.setAttribute('data-index', i);
    newItem.innerHTML = `${item} <button class="delBtn" onclick="deleteItem(event)"><span class="material-symbols-outlined">
    delete_forever </span></button>`;
    listItems.appendChild(newItem);
  }
}

function deleteItem(event){
  const index = event.target.parentNode.getAttribute("data-index");
  list.splice(index, 1);
  renderList();
}

function clearall(event){
  list=[];
  renderList();
}