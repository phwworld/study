// 할일 입력 후 추가 버튼 클릭시 할일 추가
// check 클릭시 할일 진행중, 끝남 변경
// 삭제 버튼 클릭시 할일 삭제
// 각 텝별 할일 목록 변경

let taskInput = document.querySelector('.task-input');
let addBtn = document.querySelector('.task-add');
let renderArea = document.querySelector('.task');
let tabBtn = document.querySelectorAll('.tab div');
let taskList = [];
let idNum = 0;
let filterVal = 'all';

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function (e) {
        filter(e);
    })
}

let filter = (e) => {
    if (e) {
        filterVal = e.target.className;
    }
    filterList = [];
    if (filterVal == 'going') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
                console.log(filterList);
            }
        }
        render();
    } else if (filterVal == 'done') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete) {
                filterList.push(taskList[i]);
                console.log(filterList);
            }
        }
        render();
    } else {
        render();
    }
    render();
}

let addTask = () => {
    taskValue = taskInput.value;
    let task = {
        id: idNum,
        taskCont: taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    render();
    idNum++;
    taskInput.value = '';
    console.log(taskList);
}

let taskCheck = (id) => {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            // if (taskList[i].isComplete == true) {
            //     taskList[i].isComplete = false;
            // } else {
            //     taskList[i].isComplete = true;
            // }
            break;
        }
    }
    render();
    console.log(taskList);
}

let taskDel = (id) => {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1);
        }
    }
    // render();
    filter();
    console.log(taskList);
}

let render = () => {
    let resultHtml = '';
    list = [];
    if (filterVal === 'going' || filterVal === 'done') {
        list = filterList;
    } else {
        list = taskList;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHtml += `<div>
                <div class="task-done">${list[i].taskCont}</div>
                <div>
                    <button type="button" onclick="taskCheck('${list[i].id}');">check</button>
                <button button type = "button" onclick="taskDel('${list[i].id}');"> delete</button >
                </div >
            </div > `
        } else {
            resultHtml += `<div>
                <div>${list[i].taskCont}</div>
                <div>
                    <button type="button" onclick="taskCheck('${list[i].id}');">check</button>
                <button button type = "button" onclick="taskDel('${list[i].id}');"> delete</button >
                </div >
            </div > `
        }
    }
    renderArea.innerHTML = resultHtml;
}

addBtn.addEventListener('click', addTask);