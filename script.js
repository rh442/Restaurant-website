const menuToggle = document.querySelector(".burgermenu");
const dropdownMenu = document.querySelector(".options");

menuToggle.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});