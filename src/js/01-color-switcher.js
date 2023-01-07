const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onSrartBtnClick);
refs.stopBtn.addEventListener('click', onSropBtnClick);
let timerId = null;

function onSrartBtnClick() {
    refs.startBtn.setAttribute('disabled', '');

    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onSropBtnClick() {
    refs.startBtn.removeAttribute('disabled');

    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}