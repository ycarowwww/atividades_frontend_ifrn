const tableTotal = document.querySelectorAll("tfoot td:not(:first-child)");
const tableGold = document.querySelectorAll("tbody td:nth-child(2)");
const tableSilver = document.querySelectorAll("tbody td:nth-child(3)");
const tableBronze = document.querySelectorAll("tbody td:nth-child(4)");
const tableMedals = [tableGold, tableSilver, tableBronze];

for (let i = 0; i < tableTotal.length; i++) {
    tableTotal[i].innerHTML = Array.from(tableMedals[i]).reduce((acc, el) => acc + parseInt(el.innerHTML), 0);
}