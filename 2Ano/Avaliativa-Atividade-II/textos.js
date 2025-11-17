const inputText = document.getElementById("input-text");
const btnShowText = document.getElementById("show-text");
const divTexts = document.getElementById("texts");

btnShowText.addEventListener("click", () => {
    const text = inputText.value;
    divTexts.innerHTML = "";

    for (let i = 1; i < 6; i++) {
        const newParagraph = document.createElement("p");
        newParagraph.style.fontSize = `${i}rem`;
        newParagraph.textContent = text;
        divTexts.appendChild(newParagraph);
    }
});
