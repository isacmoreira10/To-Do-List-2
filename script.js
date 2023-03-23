let modal = document.querySelector('#displayModal')
let btn = document.querySelector('#myBtn')
let spanClose = document.querySelector('#close')
let displayOpenTasks = document.querySelector('#displayOpenTasks')
let displayProgressTasks = document.querySelector('#displayProgressTasks')
let displayFinishTasks = document.querySelector('#displayFinishTasks')



btn.onclick = function () {
    modal.style.display = "block"
}

spanClose.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}


let data = new Date()
document.querySelector('#dateTime').innerHTML = data.toLocaleDateString()

let hour = new Date()
document.querySelector('#hourTime').innerHTML = hour.toLocaleTimeString()


let titleTasks = document.querySelector('#titleTasks')
let tasks = document.querySelector('#tasks')
let arrayTasksOpen = []

function addTasks() {
    let itemTasks = {
        title: titleTasks.value,
        tasks: tasks.value
    }

    arrayTasksOpen.push(itemTasks)
}



function btnOpen() {
    addTasks()
    let newDivTasksOPen = ''
    for (let i = 0; i < arrayTasksOpen.length; i++) {
        const divTasksOpen = `<div>
        <img src="Vector (4).png">
        <p>Em aberto  ${[i + 1]}</p>
        <img src="Vector (3).png">
        ${arrayTasksOpen[i].title} <br>
        <p>Sua tarefa</p> <hr>
        ${arrayTasksOpen[i].tasks}
        </div>`
        newDivTasksOPen += divTasksOpen
    }
    displayOpenTasks.innerHTML = newDivTasksOPen

}


function btnProgress() {
    let taskProgress = ''
    for (let i = 0; i < arrayTasksOpen.length; i++) {
        const divTasksProgress = `<div>
        <img src="Vector (4).png">
        <p>Em andamento  ${[i + 1]}</p>
        <img src="Vector (3).png">
        ${arrayTasksOpen[i].title} <br>
        <p>Sua tarefa</p> <hr>
        ${arrayTasksOpen[i].tasks}
        </div>`
        taskProgress += divTasksProgress
    }

    displayProgressTasks.innerHTML = taskProgress
    addTasks()
}


function btnFinish() {
    let taskFinish = ''
    for (let i = 0; i < arrayTasksOpen.length; i++) {
        const divTasksOpen = `<div>
        <img src="Vector (4).png">
        <p>Finalizado  ${[i + 1]}</p>
        <img src="Vector (3).png">
        ${arrayTasksOpen[i].title} <br>
        <p>Sua tarefa</p> <hr>
        ${arrayTasksOpen[i].tasks}
        </div>`
        taskFinish += divTasksOpen
    }
    displayFinishTasks.innerHTML = taskFinish
}









