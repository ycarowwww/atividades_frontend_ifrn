function generateRandomColor() {
    // Retorna um Array com 3 números representando o rgb.
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
}

function changeBodyBgColor(buttonElement) {
    // Muda a o CSS "background-color" do Body para o mesmo do botão "buttonElement".
    const color = buttonElement.style.backgroundColor;
    document.body.style.backgroundColor = color;
}

function generateButton() {
    const newBtn = document.createElement("button");
    newBtn.classList.add("change-background");
    const newBtnColor = generateRandomColor();
    newBtn.style.backgroundColor = `rgb(${newBtnColor[0]}, ${newBtnColor[1]}, ${newBtnColor[2]})`;
    document.body.appendChild(newBtn);
}

for (let i = 0; i < 100; i++) { // Cria 100 botões com cores aleatórias.
    generateButton();
}

const addButton = document.getElementById("add-button");

document.body.addEventListener("click", e => {
    const buttonClicked = e.target.closest(".change-background");

    if (!buttonClicked) return; // Verifica se o clique não foi em um botão.

    changeBodyBgColor(buttonClicked);
});

addButton.addEventListener("click", () => {
    generateButton();
});

setInterval(() => { // Muda as cores dos botões a cada 2 segundos.
    const allButtons = document.getElementsByClassName("change-background");

    for (const btn of allButtons) {
        const newBtnColor = generateRandomColor();
        btn.style.backgroundColor = `rgb(${newBtnColor[0]}, ${newBtnColor[1]}, ${newBtnColor[2]})`;
    }
}, 2000);
