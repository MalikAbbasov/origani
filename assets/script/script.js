let departmensButton = document.querySelector(".header_main_selector_buton");
let options = document.querySelector(".header_main_selector_options");

departmensButton.addEventListener("click", function () {
  options.classList.toggle("none");
});
