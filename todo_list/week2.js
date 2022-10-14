// 오른쪽 왼쪽 구분!!!
//+버튼 클릭하면, 할 일이 추가된다.
//delete 버튼 클릭하면, 할일이 삭제된다.
//오늘 할일 내일 할일 누르면 선이 이동하면서 전체 화면으로
//전체 보기 누르면 두개 동시에 다 보인다

// const leftSection = document.querySelector('.section_left');
// const rightSection = document.querySelector('.section_right');
const toDoForm = document.querySelector('.todo_form'),
    toDoInput = toDoForm.querySelector('left_text_input'),
    toDoList = document.querySelector('.todo_list');
const TODOS_LS = 'toDos';

function paintToDo(text) {

}

function handleSubmit(event) { 
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos() { 
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
    }
    init();