const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const textNumber = document.getElementById("number");

function increaseNumber(textElement, amount) { // Aumenta em um valor "amount" o texto do elemento HTML "textElement".
    let valueText = Number(textElement.textContent);
    if (isNaN(valueText)) {
        valueText = 0;
    } else {
        valueText += amount;
    }
    textElement.textContent = `${valueText}`;
}

btnMinus.addEventListener("click", () => {
    increaseNumber(textNumber, -1);
});

btnPlus.addEventListener("click", () => {
    increaseNumber(textNumber, 1);
});
