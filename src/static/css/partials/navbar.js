const primaryNav = document.querySelector("#primary-navigation");
const navToggleBtn = document.querySelector(".hamburger-menu");

navToggleBtn.addEventListener("click", () => {

    const visible = primaryNav.getAttribute("data-visible")

    if (visible === "false") {
        primaryNav.setAttribute("data-visible", "true")
        navToggleBtn.setAttribute("aria-expanded", "true")
    } else if (visible === "true") {
        primaryNav.setAttribute("data-visible", "false")
        navToggleBtn.setAttribute("aria-expanded", "false")
    }

});