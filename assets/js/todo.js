const input = document.querySelector('#inputTask');
const addTask = document.querySelector('#btnAddNewTask');
const removeTask = document.querySelector('#btnRemoveTask');
const taskList = document.querySelector('#listTasks');
const taskItem = document.querySelector('#itemList');

function insertItem(){
    addTask.addEventListener('click', function(insertItem){
        const taskItem = document.createElement('itemList');

       

        taskItem.innerHTML = `
            <li class="todolist__list__item" id="itemList">
                <span class="todolist__list__item--text">${input.value}</span>
                <button class="todolist__button btn btnRemove" id="btnRemoveTask"><i class="fa-solid fa-trash"></i></button>
            </li>
        `
        if(input.value == ""){
            alert('Não é possível adicionar tarefa com o campo vazio!')
            return;
        }
        taskList.appendChild(taskItem);
    })
    
    function clearInput(){
        addTask.addEventListener('click', function(clearInput){
            if(input.value != ""){
                input.value == "";
            }
        })
    }
    clearInput()
}
insertItem();