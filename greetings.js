const form = document.querySelector('.js-form'),
    input = form.querySelector('.js-input'),
    hi = form.querySelector('.js-hi');

const USER_LS = 'currentUser',
    HIDE_CN = 'hide';

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;

    localStorage.setItem(USER_LS, currentValue);
    paintGreeting(currentValue);
}

function askForName() {
    // input.classList.remove(HIDE_CN);
    // hi.classList.add(HIDE_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(name) {
    input.classList.add(HIDE_CN);
    hi.classList.remove(HIDE_CN);
    hi.innerHTML = `Welcome, ${name}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
