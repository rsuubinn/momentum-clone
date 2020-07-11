const logo = document.querySelector(".js-logo"),
  logoImg = logo.querySelector("img");

function handleClick() {
  location.href = "https://github.com/rsuubinn";
}

function init() {
  logoImg.addEventListener("click", handleClick);
}

init();
