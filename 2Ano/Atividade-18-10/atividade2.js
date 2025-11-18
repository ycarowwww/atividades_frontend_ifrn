const inputName = document.getElementById("input-name");
const addName = document.getElementById("add-name");
const listNames = document.getElementById("list-names");
const names = [ "Maria", "Pedro", "José" ];

function changeList(listElement, newNames) {
    // Limpa a lista "listElement" e adiciona todos os nomes de "newNames".
    listElement.innerHTML = "";

    for (const name of newNames) {
        const newLi = document.createElement("li");
        newLi.textContent = name;
        listElement.appendChild(newLi);
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

changeList(listNames, names); // Mostra os nomes iniciais.
