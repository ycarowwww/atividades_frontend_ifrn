const linkCSS = document.getElementById("css-link");
const switchBtns = document.querySelectorAll(".theme-switcher button");

for (const btn of switchBtns) {
    btn.addEventListener("click", () => {
        switchBtns.forEach(v => {
            if (v !== btn) {
                v.className = "";
            }
        });

        btn.classList.add("selected");

        if (btn.dataset.type === "light") linkCSS.href = "light_theme.css";
        else if (btn.dataset.type === "contrast") linkCSS.href = "contrast_theme.css";
        else if (btn.dataset.type === "dark") linkCSS.href = "dark_theme.css";
    });
}
