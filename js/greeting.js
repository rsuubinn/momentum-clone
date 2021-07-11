const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const jsClock = document.querySelector(".clock");
const jsToDoForm = document.querySelector(".todo-form");
const jsToDoList = document.querySelector(".todo-list");

const SHOWING_CLASSNAME = "showing";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.remove(SHOWING_CLASSNAME);
  showGreeting(username);
}

function showGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.add(SHOWING_CLASSNAME);
  jsClock.classList.add(SHOWING_CLASSNAME);
  jsToDoForm.classList.add(SHOWING_CLASSNAME);
  jsToDoList.classList.add(SHOWING_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 유저 존재하지 않을 때
if (savedUsername === null) {
  loginForm.classList.add(SHOWING_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 유저 존재할 때
  showGreeting(savedUsername);
}
