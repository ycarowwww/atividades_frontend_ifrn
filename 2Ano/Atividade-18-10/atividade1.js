function generateRandomColor() {
    // Retorna um Array com 3 números representando o rgb.
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
}

function changeBodyBgColor(buttonElement) {
    // Muda a o CSS "background-color" do Body para o mesmo do botão "buttonElement".
    const color = buttonElement.style.backgroundColor;
    document.body.style.backgroundColor = color;
}

for (let i = 0; i < 100; i++) { // Cria 100 botões com cores aleatórias.
    const newBtn = document.createElement("button");
    const newBtnColor = generateRandomColor();
    newBtn.style.backgroundColor = `rgb(${newBtnColor[0]}, ${newBtnColor[1]}, ${newBtnColor[2]})`;
    document.body.appendChild(newBtn);
}

document.body.addEventListener("click", e => {
    const buttonClicked = e.target.closest("button");

    if (!buttonClicked) return; // Verifica se o clique não foi em um botão.

    changeBodyBgColor(buttonClicked);
});
