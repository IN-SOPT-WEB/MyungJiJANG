// 오른쪽 왼쪽 구분!!!
//+버튼 클릭하면, 할 일이 추가된다.
//delete 버튼 클릭하면, 할일이 삭제된다.
//오늘 할일 내일 할일 누르면 선이 이동하면서 전체 화면으로
//전체 보기 누르면 두개 동시에 다 보인다

const leftSection = document.querySelector('.section_left');
const rightSection = document.querySelector('.section_right');
let textInput = document.querySelector("text_input"); // 1. 유저가 값을 입력한다
let addButton = document.querySelector("add_button"); // 2. + 버튼 클릭하면
addButton.addEventListener("click", addTask);
let tabs = document.querySelectorAll(".nav_button");//tab
let taskList = []
let mode =''

addButton.addEventListener("click", addTask);//tab
console.log(tabs)//tab

for (let i = 0; i < tabs.length; i++) { 
    tabs[i].addEventListener("click", function (event) {
        filter(event);
    });
} //tab

function addTask() {  
    let task = {
        id:uid(),
        taskContent: textInput.value,
        isComplete:false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}// 3. 할일이 추가된다. // 객체로 변화된다

function render() { 
    let resultHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete == true) { 
            resultHTML += `<div class ="done_task">
            <div class="do_task"> ${ taskList[i].taskContent } </div>
            <div>
                <button onclick ="deleteTask('${ taskList[i].id }')">X</button>
            </div>
        </div>`;
        } else {
                resultHTML += `<div class ="todo_list">
            <div class="do_task"> ${taskList[i].taskContent} </div>
            <div>
                <button onclick ="deleteTask('${taskList[i].id}')">X</button>
            </div>
        </div>`;
        }
    }


    document.getElementById("task_board").innerHTML = resultHTML;
} //할일 추가 화면에 띄우기 // 딜리트 지우기 성공

function deleteTask(id) {
    console.log("id:", id);
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1);
            break;
        }
    }
    render();
    console.log(taskList);
}

function filter(event) {
    mode=event.target.id;
    if (mode == "all") {
        render()
    } else if (mode == "now") { 
        for (let i = 0; i <taskList.length; i++) {
            if (taskList[i].isComplete == false) {
                filterList.push(taskList[i]);
            }
         }
    }
    console.log(filterList);
}//tab
 

function uid() {
    let a = new Uint32Array(3);
    window.crypto.getRandomValues(a);
    return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
}; // 랜덤 id함수 만들기
   

//오른쪽 내일 할 일