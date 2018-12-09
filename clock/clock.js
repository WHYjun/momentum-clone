const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  hours = hours > 9 ? hours : `0${hours}`;
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  const interval = 1000;
  setInterval(getTime, interval);
}

init();
