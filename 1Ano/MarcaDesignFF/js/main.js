function backgroundHeader() {
    const headerElement = document.querySelector("header");

    headerElement.classList = "";
    
    if (window.scrollY > 0) { // Verifica se estar "scrollado" um pouco pra baixo
        headerElement.classList.toggle("scrolled");
    }
}

function updateScrollMainSectors(multiplier) { // Move e atualiza o Scroll do "Main Sectors" section | multiplier é um valor que aceita 1 ou -1 para voltar ou seguir o scroll. (ñ sei explicar direito)
    const mainSectors = document.querySelector(".main-sectors");
    const mainSectorsWrapper = document.querySelector(".main-sectors-wrapper");
    const wrapperLocationBarElements = document.querySelectorAll(".wrapper-location-bar div");

    mainSectorsWrapper.scrollLeft += mainSectors.offsetWidth * multiplier;
    mainSectorsControlButtons.forEach((element) => { element.toggleAttribute("disabled") });
    wrapperLocationBarElements.forEach((element) => { element.classList.toggle("main-sectors-selected") });
}

const mainSectorsControlButtons = document.querySelectorAll(".main-sectors-control-buttons button"); // Acho q já exagerei um pouco mas blz

document.addEventListener("scroll", backgroundHeader);
mainSectorsControlButtons.forEach((element, index) => {
    element.addEventListener("click", () => { updateScrollMainSectors(2 * index - 1) });
});