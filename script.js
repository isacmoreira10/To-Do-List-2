function dateAndHour() {
    let dataModalOpen = new Date()
    document.querySelector('#dateTimeModalOpen').innerHTML = dataModalOpen.toLocaleDateString()

    let hourModalOpen = new Date()
    document.querySelector('#hourTimeModalOpen').innerHTML = hourModalOpen.toLocaleTimeString()

    let dataModalProgress = new Date()
    document.querySelector('#dateTimeModalProgress').innerHTML = dataModalProgress.toLocaleDateString()

    let hourModalProgress = new Date()
    document.querySelector('#hourTimeModalProgress').innerHTML = hourModalProgress.toLocaleTimeString()

    let dataModalFinish = new Date()
    document.querySelector('#dateTimeModalFinish').innerHTML = dataModalFinish.toLocaleDateString()

    let hourModalFinish = new Date()
    document.querySelector('#hourTimeModalFinish').innerHTML = hourModalFinish.toLocaleTimeString()
}


function createDivOpenTasks() {
    createModalOpen()
    dateAndHour()

}

let indexOpenTasks = document.querySelector('#indexOpenTasks')
let tasksOpenDiv = document.querySelector('#tasksOpenDiv')
let objectTasksOpen = []

function ButtonAddOpenTasks() {
    let titleOpenContent = document.querySelector('#titleOpenContent')
    let tasksOpenContent = document.querySelector('#tasksOpenContent')

    let itemTasksOpen = {
        titleOpenContent: titleOpenContent.value,
        tasksOpenContent: tasksOpenContent.value
    }
    objectTasksOpen.push(itemTasksOpen)
    addTasksOpen()
}

function addTasksOpen() {
    let newDivOpenTasks = ''
    for (let index = 0; index < objectTasksOpen.length; index++) {
        const tasksOpenElementHtml = `<div class="tasksOpenDiv" id="tasksOpenDiv">
        <br>
        <div class="taskOpenDivContent">
            <a class="taskContent"> ${objectTasksOpen[index].tasksOpenContent} </a>
        </div>
        <div class="titleOpenDivContent">
            <a>
             <img src="Vector (3).png" class="vector3">
            ${objectTasksOpen[index].titleOpenContent}
                </a>
                <a>
                <button onclick="removeTasksOpen(${index})" class="buttonRemoveTaskOpen">
                <img src="icons8-trash-bin-50 (1).png" class="imageTrashOpen">
                </button>
                </a>
        </div>
    </div>`
        newDivOpenTasks += tasksOpenElementHtml
        indexOpenTasks.innerHTML = index + 1
    }

    tasksOpenDiv.innerHTML = newDivOpenTasks
    document.querySelector('#titleOpenContent').value = ''
    document.querySelector('#tasksOpenContent').value = ''
}

function createModalOpen() {
    let modalOpen = document.querySelector('#modalOpenTasks')
    let btnModalOpen = document.querySelector('#btnModalOpen')
    let span = document.getElementsByClassName("btnCloseOpen")[0]
    btnModalOpen.onclick = function () {
        modalOpen.style.display = "block"
    }

    span.onclick = function () {
        modalOpen.style.display = "none"
    }

    window.onclick = function (event) {
        if (event.target == modalOpen) {
            modalOpen.style.display = "none"
        }
    }

}

function createModalProgress() {
    let modalProgress = document.querySelector('#modalProgressTasks')
    let btnmodalProgress = document.querySelector('#btnModalProgress')
    let span = document.getElementsByClassName("btnCloseProgress")[0]
    btnmodalProgress.onclick = function () {
        modalProgress.style.display = "block"
    }

    span.onclick = function () {
        modalProgress.style.display = "none"
    }

    window.onclick = function (event) {
        if (event.target == modalProgress) {
            modalProgress.style.display = "none"
        }
    }

}

function CreateDivProgress() {
    createModalProgress()
    dateAndHour()
}

let indexProgressTask = document.querySelector('#indexProgressTask')
let taskProgressDiv = document.querySelector('#taskProgressDiv')
let objectTasksProgress = []

function buttonAddProgressTasks() {
    let titleProgressContent = document.querySelector('#titleProgressContent')
    let tasksProgressContent = document.querySelector('#tasksProgressContent')

    let itemTasksProgress = {
        titleProgressContent: titleProgressContent.value,
        tasksProgressContent: tasksProgressContent.value
    }

    objectTasksProgress.push(itemTasksProgress)
    addTasksProgress()
}

function addTasksProgress() {
    let newDivProgressTasks = ''
    for (let i = 0; i < objectTasksProgress.length; i++) {
        const tasksProgressHtmlElement = `<div class="tasksProgressDiv">
    <br>
    <div class="taskProgressDivContent">
        <a class="taskContent">
        ${objectTasksProgress[i].tasksProgressContent} </a>
    </div>
    <div class="titleProgressDivContent">
        <a>
            <img src="Vector (3).png" class="vector3">
        ${objectTasksProgress[i].titleProgressContent}
            </a>
            <a><button onclick="removeTasksProgress(${i})" class="buttonRemoveTaskProgress">
            <img src="icons8-trash-bin-50 (1).png" class="imageTrashProgress">
            </button>
            </a>
    </div>
</div>`
        newDivProgressTasks += tasksProgressHtmlElement
        indexProgressTask.innerHTML = i + 1
    }
    taskProgressDiv.innerHTML = newDivProgressTasks

    document.querySelector('#titleProgressContent').value = ''
    document.querySelector('#tasksProgressContent').value = ''
}


function createModalFinish() {
    let modalFinish = document.querySelector('#modalFinishTasks')
    let btnModalFinish = document.querySelector('#btnModalFinish')
    let span = document.getElementsByClassName("btnCloseFinish")[0]
    btnModalFinish.onclick = function () {
        modalFinish.style.display = "block"
    }

    span.onclick = function () {
        modalFinish.style.display = "none"
    }

    window.onclick = function (event) {
        if (event.target == modalFinish) {
            modalFinish.style.display = "none"
        }
    }
}

function createDivFinish() {
    createModalFinish()
    dateAndHour()

}

let objectTasksFinish = []

function buttonAddFinishTasks() {
    let titleFinishContent = document.querySelector('#titleFinishContent')
    let tasksFinishContent = document.querySelector('#tasksFinishContent')

    let itemTasksFinish = {
        titleFinishContent: titleFinishContent.value,
        tasksFinishContent: tasksFinishContent.value
    }

    objectTasksFinish.push(itemTasksFinish)
    addTasksFinish()
}

function addTasksFinish() {
    let indexFinishTask = document.querySelector('#indexFinishTask')
    let taskFinishDiv = document.querySelector('#taskFinishDiv')
    let newDivProgressTasks = ''
    for (let indicator = 0; indicator < objectTasksFinish.length; indicator++) {
        const tasksFinishHtmlElement = ` <div class="tasksFinishDiv">
                    <br>
                    <div class="taskFinishDivContent">
                        <a class="taskContent">${objectTasksFinish[indicator].tasksFinishContent}
                        </a>
                    </div>
                    <div class="titleFinishDivContent">
                        <a>
                            <img src="Vector (3).png" class="vector3"> ${objectTasksFinish[indicator].titleFinishContent}</a>
                            <a><button onclick="removeTasksFinish(${indicator})" class="buttonRemoveTaskFinish">
                            <img src="icons8-trash-bin-50 (1).png" class="imageTrashFinish">
                            </button></a>
                    </div>
                </div>`
        newDivProgressTasks += tasksFinishHtmlElement
        indexFinishTask.innerHTML = indicator + 1
    }

    taskFinishDiv.innerHTML = newDivProgressTasks
    document.querySelector('#titleFinishContent').value = ''
    document.querySelector('#tasksFinishContent').value = ''
}


function removeTasksOpen(index) {
    const removeDivOpen = objectTasksOpen.filter(function (objectTaskOpen, taskindex) {
        return index !== taskindex
    })
    objectTasksOpen = removeDivOpen
    addTasksOpen()
}

function removeTasksProgress(i) {
    const removeDivProgress = objectTasksProgress.filter(function (objectTaskProgress, taskindex) {
        return i !== taskindex
    })
    objectTasksProgress = removeDivProgress
    addTasksProgress()
}

function removeTasksFinish(indicator) {
    const removeDivFinish = objectTasksFinish.filter(function (objectTaskFinish, taskindex) {
        return indicator !== taskindex
    })
    objectTasksFinish = removeDivFinish
    addTasksFinish()
}
