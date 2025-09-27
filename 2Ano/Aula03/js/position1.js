const rangeHeader = document.getElementById("range-header");
const pageHeader = document.getElementsByTagName("header")[0];
const modalBtn = document.querySelector("#modal button");
const modal = document.getElementById("modal");
const fadeModal = document.getElementById("esmaecer");

rangeHeader.addEventListener("input", () => {
    pageHeader.style.top = `${rangeHeader.value}px`;
});
modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    fadeModal.style.display = "none";
});
