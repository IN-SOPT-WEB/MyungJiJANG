/** @format */

const selectList = document.querySelector(".drop-down");
const selectedValue = document.querySelector(".selected-value");
const selectOption = selectList.querySelectorAll(".option");

[...selectOption].forEach((option) => {
  option.addEventListener("click", selectCheck);
});

function selectCheck(event) {
  [...selectOption].forEach((option) => {
    option.classList.remove("selected-text");
  });
  event.target.classList.add("selected-text");
  selectedValue.innerText = event.target.innerText;
}

function dropDownCheck() {
  selectList.style.display =
    selectList.style.display === "none" ? "block" : "none";
}

const dropDown = document.querySelector(".selected");
dropDown.addEventListener("click", dropDownCheck);

// 모달구현
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".Card_list");
const modalClose = document.querySelector(".modal_close");

modalOpen.addEventListener("click", () => {
  modal.style.display = "block";
  modal.classList.toggle("show");
  document.body.style.overflow = 'hidden';
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = 'auto';

});
