let allTasks = [];

const arrayDataTasks = fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    const tasks = fetchTasks(data);
    allTasks = tasks;
    renderTasks();
  });

function fetchTasks(arrayOfTasks) {
  return arrayOfTasks.slice(10, 15).map((task) => {
    return {
      text: task.title,
      completed: task.completed,
    };
  });
}

const addTaskBtn = document.querySelector(".btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".list");
const filterAllBtn = document.getElementById("all");
const filterPendingBtn = document.getElementById("uncompleted");
const filterCompletedBtn = document.getElementById("completed");

const createTask = (taskText) => {
  const task = {
    text: taskText,
    completed: false,
  };
  allTasks.push(task);
  renderTasks();
};

const renderTasks = (filter = "all") => {
  taskList.innerText = "";

  let tasksToRender = [];

  if (filter === "all") {
    tasksToRender = allTasks;
  } else if (filter === "pending") {
    tasksToRender = allTasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    tasksToRender = allTasks.filter((task) => task.completed);
  }

  tasksToRender.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    if (task.completed) {
      listItem.classList.add("list-item_done");
    }

    listItem.textContent = task.text;
    listItem.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks(filter);
    });

    taskList.appendChild(listItem);
  });
};

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTask(taskText);
    taskInput.value = "";
    taskInput.focus();
  }
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const taskText = taskInput.value.trim();
    if (taskText) {
      createTask(taskText);
      taskInput.value = "";
      taskInput.focus();
    }
  }
});

filterAllBtn.addEventListener("click", () => renderTasks("all"));
filterPendingBtn.addEventListener("click", () => renderTasks("pending"));
filterCompletedBtn.addEventListener("click", () => renderTasks("completed"));
