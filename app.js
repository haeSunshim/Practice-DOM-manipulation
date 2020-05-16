const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener("click", function () {
  text.classList.toggle("change");
});
