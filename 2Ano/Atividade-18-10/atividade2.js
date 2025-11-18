const inputName = document.getElementById("input-name");
const addName = document.getElementById("add-name");
const listNames = document.getElementById("list-names");
const nameLiTemplate = document.getElementById("name-li");
const names = [ "Maria", "Pedro", "José" ];

function generateRandomColor() {
    // Retorna um Array com 3 números representando o rgb.
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
}

function changeList(listElement, newNames) {
    // Limpa a lista "listElement" e adiciona todos os nomes de "newNames".
    listElement.innerHTML = "";

    for (const name of newNames) {
        const newLi = nameLiTemplate.content.cloneNode(true);
        newLi.querySelector("span").textContent = name;
        const newLiColor = generateRandomColor();
        newLi.querySelector("span").style.color = `rgb(${newLiColor[0]}, ${newLiColor[1]}, ${newLiColor[2]})`; // Coloca uma cor de texto aleatória.
        listNames.appendChild(newLi);
    }
}

addName.addEventListener("click", () => {
    const name = inputName.value.trim(); // Pega o nome digitado e retira os "espaços" dos lados dele.

    if (name === "") return; // Verifica se existe um nome.

    names.push(name);
    changeList(listNames, names);

    inputName.value = "";
    inputName.focus();
});

listNames.addEventListener("click", e => {
    const removeBtn = e.target.closest("button");

    if (!removeBtn) return; // Verificar se foi clicado no botão de remover.

    const nameIndex = Array.from(listNames.querySelectorAll("li")).findIndex(val => val === removeBtn.parentElement); // Encontra o Index do "li" a ser excluído.
    names.splice(nameIndex, 1);
    changeList(listNames, names);
});

changeList(listNames, names); // Mostra os nomes iniciais.
