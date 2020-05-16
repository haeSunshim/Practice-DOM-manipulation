// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// changeColor.addEventListener("click", function () {
//   text.classList.toggle("change");
// });
const userList = document.querySelectorAll(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
// for (user of userList) {
//   user.addEventListener("click", function () {
//     //console.log(this);
//     this.style.color = "red";
//   });
// }
// console.log(listInput.value);

addListBtn.addEventListener("click", function () {
  //Create an Li out of thin air
  const newLi = document.createElement("li");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value inside that new Li
  newLi.appendChild(liContent);
  //Attaching the Li to the user List
  userList.appendChild(newLi);
  //listInput.value = "";
});
