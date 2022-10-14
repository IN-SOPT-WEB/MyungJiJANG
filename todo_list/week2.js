const leftSection = document.querySelector('.section_left');
const leftForm = leftSection.querySelector('.todo_form');
const rightSection = document.querySelector('.section_right');
const rightForm = rightSection.querySelector('.todo_form');
// function addTodoInLeftSection(event) {
    
//     event.preventDefault();

//     const input = leftForm.querySelector('input');
//     console.log(input);
// }


// const form = document.querySelectorAll('.todo_form');
// [...form].forEach((x) => x.addEventListener('click', (e) => {
//     e.preventDefault();

//     const input = x.querySelector('input');
//     console.log(input);

//     const todo = input.value;
//     console.log(todo);

//     const ul = leftSection.querySelector('ul');
//     const ulR = rightSection.querySelector('ul');
//     const li = document.createElement('li');
//     const liR = document.createElement('li');

//     li.innerText = todo;
//     ul.appendChild(li);
//     ulR.appendChild(liR);
//     console.log(ul);
// }))

//tap구현하기 1.qsa nav 다 잡기 2. 눌렀을때 id 구분하기 3. addEventListener('click')

function handleNavigation(event) { 
    console.log(event.target.id);
    const id = event.target.id;

    
    switch (id) { 
        case 'now': {
            leftSection.style.width = '100%';
            rightSection.style.width = '0%';
            rightSection.style.overflow = 'hidden';
            break;
         }
        case 'next': { 
            leftSection.style.width = '0%';
            rightSection.style.width = '100%';
            rightSection.style.margin = '0%';
            leftSection.style.overflow = 'hidden';
            break;
        }
        case 'all': { 
            leftSection.style.width = '50%';
            rightSection.style.width = '50%';
            break;
        }
    }
}//tap 바꾸기 구현

const navButtons = document.querySelectorAll('.nav_button');
[...navButtons].forEach((navButton) => navButton.addEventListener('click', handleNavigation));


function addTodoInLeftSection(event) { 
    event.preventDefault();// 웹페이지가 새로고침되는 것을 막아줌
    
    console.log(leftForm.querySelector('input').value);
    const input = leftForm.querySelector('input');
    const todo = input.value; // todo 집어넣기
    console.log(leftForm)

    const ul = leftSection.querySelector('ul');
    const li = document.createElement('li');
    li.classList.add('list_items');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete_btn');
    deleteBtn.innerText = 'X';
    li.innerText = todo;
    li.appendChild(deleteBtn);


    ul.appendChild(li);

    input.value = '';

    render();
}

leftForm.addEventListener('submit', addTodoInLeftSection); // 나 이거 왜 submit이 아니라 click으로 해야되는지 모르겠어요 submit으로 하면 안되더라구요
const leftButton = leftForm.querySelector('button').addEventListener('click', addTodoInLeftSection);



function addTodoInRightSection(event) { 
    event.preventDefault();// 웹페이지가 새로고침되는 것을 막아줌
    
    console.log(rightForm.querySelector('input').value);
    const input = rightForm.querySelector('input');
    const todo = input.value; // todo 집어넣기

    const ul = rightSection.querySelector('ul');
    const li = document.createElement('li');
    li.classList.add('list_items');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete_btn');
    deleteBtn.innerText = 'X';
    li.innerText = todo;
    li.appendChild(deleteBtn);


    ul.appendChild(li);

    input.value = '';

    render();
}

rightForm.addEventListener('submit', addTodoInRightSection)
const rightButton = rightForm.querySelector('button').addEventListener('click', addTodoInRightSection); 

function deleteTodo(e) { 
    console.log(e.target.closest('li'));
    const deleteTarget = e.target.closest('li');
    deleteTarget.remove();
} //delete 삭제 구현

function render() {
    const todoList = document.querySelectorAll('.list_items');
    [...todoList].forEach((list)=>list.addEventListener('click', deleteTodo));

    // const deleteBtns = document.querySelectorAll('.delete_btn');
    // console.log(deleteBtns); 
    // [...deleteBtns].forEach((deleteButton)=>deleteButton.addEventListener('click', deleteTodo));
}
render();