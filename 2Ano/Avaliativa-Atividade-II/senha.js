const inputPassword = document.getElementById("input-password");
const inputConfirmation = document.getElementById("input-confirmation");
const checkPassword = document.getElementById("check-password");
const textResult = document.getElementById("result");

checkPassword.addEventListener("click", () => {
    if (inputPassword.value === inputConfirmation.value) textResult.textContent = "iguais";
    else textResult.textContent = "diferentes";
});
