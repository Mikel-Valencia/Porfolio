const hamburgerBtn = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener("click", () => {
    const currentState = hamburgerBtn.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        hamburgerBtn.setAttribute("data-state", "opened");
        hamburgerBtn.setAttribute("aria-expanded", "true");
    } else {
        hamburgerBtn.setAttribute("data-state", "closed");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }
});