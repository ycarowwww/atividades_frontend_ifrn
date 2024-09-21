function backgroundHeader() {
    const headerElement = document.querySelector("header");

    headerElement.classList = "";
    
    if (window.scrollY > 0) {
        headerElement.classList.toggle("scrolled");
    }
}

document.addEventListener("scroll", backgroundHeader);