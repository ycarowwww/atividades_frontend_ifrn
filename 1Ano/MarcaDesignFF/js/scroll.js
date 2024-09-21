function updateScrollMainSectors(multiplier) {
    const mainSectors = document.querySelector(".main-sectors");
    const mainSectorsWrapper = document.querySelector(".main-sectors-wrapper");
    const wrapperLocationBarElements = document.querySelectorAll(".wrapper-location-bar div");

    mainSectorsWrapper.scrollLeft += mainSectors.offsetWidth * multiplier;
    mainSectorsControlButtons.forEach((element) => { element.toggleAttribute("disabled") });
    wrapperLocationBarElements.forEach((element) => { element.classList.toggle("main-sectors-selected") });
}

const mainSectorsControlButtons = document.querySelectorAll(".main-sectors-control-buttons button");

mainSectorsControlButtons.forEach((element, index) => {
    element.addEventListener("click", () => { updateScrollMainSectors(2 * index - 1) });
});