const menuToggle = document.querySelector(".burgermenu");
const dropdownMenu = document.querySelector(".options");

menuToggle.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});



const success = document.querySelector(".success");
const submit_button = document.querySelector(".submit")

submit_button.addEventListener("click", () => {
   success.style.display="block";
   setTimeout(() => {
    success.style.display = "none";
  }, 10000);
});