const body = document.querySelector('body');

const IMAGE_NUMBER = 4;

function paintImage(IMAGE_NUMBER) {
    const image = new Image();
    image.src = `images/${IMAGE_NUMBER + 1}.jpg`;
    image.classList.add('bgimage');

    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
