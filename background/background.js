const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  paintImage(randomNumber);
}

init();
