const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const button = document.getElementById("btn");



button.addEventListener("click", () => {
  if (taskInput.value !== "") {

    const task = document.createElement("li");

    task.appendChild(document.createTextNode(taskInput.value));

    taskList.appendChild(task);

    taskInput.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    deleteBtn.addEventListener("click", function () {
      this.parentNode.remove();

    });

    task.appendChild(deleteBtn);

    task.addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
}

);









