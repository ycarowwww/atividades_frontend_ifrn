const coloredText = document.getElementById("colored-text");

const r = Math.floor(Math.random() * 256); // Gera números aleatórios entre 0 e 255 (inclusivo).
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

coloredText.style.color = `rgb(${r}, ${g}, ${b})`;
