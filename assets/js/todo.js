const input = document.querySelector("#inputTask");
const addTask = document.querySelector("#btnAddNewTask");
const removeTask = document.querySelector("#btnRemoveTask");
const taskList = document.querySelector("#listTasks");
const taskItem = document.querySelector("#itemList");

const sound = document.querySelector("audio");

function insertItem() {
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const addTask = document.querySelector("#btnAddNewTask");

      addTask.click();
    }
  });

  addTask.addEventListener("click", function (insertItem) {
    const taskItem = document.createElement("itemList");
    taskItem.innerHTML = `
            <li class="todolist__list__item" id="itemList">
                <span class="todolist__list__item--text">${input.value}</span>
                <button class="todolist__button btn btnRemove" id="btnRemoveTask"><i class="fa-solid fa-trash"></i></button>
            </li>
        `;
    if (input.value === "") {
      alert("Não é possível adicionar tarefa com o campo vazio!");
      return;
    }
    input.value = "";
    sound.play();
    taskList.appendChild(taskItem);
  });
}

insertItem();
