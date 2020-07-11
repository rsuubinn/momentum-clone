const greetingForm = document.querySelector(".js-greeting"),
  greetingInput = greetingForm.querySelector("input"),
  greetingUser = document.querySelector(".js-greetingUser"),
  jsToDoForm = document.querySelector(".js-toDoForm"),
  jsClock = document.querySelector(".js-clock");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveUser(text) {
  localStorage.setItem(USER_LS, text);
}

function paintUser(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greetingUser.classList.add(SHOWING_CN);
  jsToDoForm.classList.add(SHOWING_CN);
  jsClock.classList.add(SHOWING_CN);
  greetingUser.innerText = `Nice to meet you, ${text}.`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  saveUser(currentValue);
  paintUser(currentValue);
}

function askUser() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function loadUser() {
  const loadedUser = localStorage.getItem(USER_LS);
  if (loadedUser === null) {
    askUser();
  } else {
    paintUser(loadedUser);
  }
}

function init() {
  loadUser();
}

init();
