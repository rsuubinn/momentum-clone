const clock = document.querySelector(".js-clock"),
  clockTitle = clock.querySelector("div");

function getTimes() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }`;
}

function init() {
  setInterval(getTimes, 1000);
  getTimes();
}

init();
