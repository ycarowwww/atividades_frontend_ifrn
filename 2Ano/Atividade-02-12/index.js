const h1Title = document.getElementById("title");
const inputTitle = document.getElementById("title-input");
const inputIntervalSeconds = document.getElementById("interval-seconds");
const btnApply  = document.getElementById("btn-apply");
let intervalId = null;

function getRandomRGBColor() {
    return `rgb(${Array.from({ length: 3 }, () => Math.floor(Math.random() * 256)).join(", ")})`;
}

function startInterval(time, colorFunction) {
    intervalId ??= setInterval(() => {
        h1Title.style.color = colorFunction();
    }, time);
}

function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
}

function applyState() {
    stopInterval();

    const time = Number(inputIntervalSeconds.value) * 1000;

    h1Title.textContent = inputTitle.value;
    startInterval(time, getRandomRGBColor);
}

btnApply.addEventListener("click", applyState);

applyState();
