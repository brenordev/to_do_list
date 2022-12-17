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
                <span class="itemList-date" id="dateItemList"></span>
                <button class="todolist__button btn btnRemove" id="btnRemoveTask"><i class="fa-solid fa-trash"></i></button>
            </li>
        `;
    if (input.value === "") {
      const messageAlertShow = setTimeout(() => {
        const messageAlert = document.querySelector(".message-alert");
        messageAlert.innerHTML = `
          <span class="message-alert--text"> Não é possível adicionar tarefa com o campo vazio!</span>
          <span class=btnCloseModal>ok<span>

        `;
        messageAlert.style.display = "block";
        sound.play();

        if ((messageAlert.style.display = "block")) {
          input.disabled = true;
          input.style.borderColor = "red";
        }
        function btnCloseModal() {
          const btnCloseModal = document.querySelector(".btnCloseModal");
          btnCloseModal.addEventListener("click", () => {
            messageAlert.style.display = "none";
            input.style.borderColor = "#8758FF";
            input.disabled = false;
            input.focus();
          });
          return;
        }
        btnCloseModal();
      }, 100);
      return;
    }

    input.value = "";
    sound.play();
    taskList.appendChild(taskItem);
  });
}
insertItem();
