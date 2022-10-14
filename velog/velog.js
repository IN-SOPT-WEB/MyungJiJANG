const selectList = document.querySelector('.drop-down');
const selectedValue = document.querySelector('.selected-value');
const selectOption = selectList.querySelectorAll('.option');

[...selectOption].forEach(option => { option.addEventListener('click', selectCheck) })

function selectCheck(event) { 
  [...selectOption].forEach(option => { option.classList.remove('selected-text') })
  event.target.classList.add('selected-text');
  selectedValue.innerText = event.target.innerText;
}

function dropDownCheck() { 
  selectList.style.display = selectList.style.display === 'none' ? 'block' : 'none';
}

const dropDown = document.querySelector('.selected');
dropDown.addEventListener('click', dropDownCheck);


