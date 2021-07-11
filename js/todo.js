const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function showToDos(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("delBtn");
  button.addEventListener("click", deleteToDo);
  span.innerText = newToDo.text;
  li.appendChild(button);
  li.appendChild(span);
  li.id = newToDo.id;
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = {
    id: Date.now(),
    text: toDoInput.value,
  };
  toDoInput.value = "";
  showToDos(newToDo);
  toDos.push(newToDo);
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => showToDos(item));
}

toDoForm.addEventListener("submit", handleToDoSubmit);
