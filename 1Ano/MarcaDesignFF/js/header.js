function backgroundHeader() {
    const headerElement = document.querySelector("header");

    headerElement.classList = "";
    
    if (window.scrollY > 0) { // Verifica se estar "scrollado" um pouco pra baixo
        headerElement.classList.toggle("scrolled");
    }
}

document.addEventListener("scroll", backgroundHeader);