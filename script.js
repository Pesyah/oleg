function start_page(){
    document.getElementById('#')
    let columns = document.getElementsByClassName('column')
    for (let i = 0; i < columns.length; i++) {
        columns[i].children[columns[i].children.length - 1].style.marginTop = (columns[i].clientHeight - columns[i].children[columns[i].children.length - 1].clientHeight * 1.6) + "px"
    }
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.marginLeft = 1  + "vw"
    }
    console.log('Success')
}

function newColumn(){
    let newcol = document.createElement('div')
    let mainpage = document.querySelector('#columns')
    newcol.classList = 'column'
    newcol.innerHTML = `<span class="colName">${prompt('введите название колонки')}</span>
    <button class="newTask" onclick="newTask()">
    Создать задачу
    </button>`
    mainpage.appendChild(newcol)
    start_page()
}

function newTask() {
    
}
start_page()