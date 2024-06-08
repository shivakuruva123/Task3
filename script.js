// Array to store tasks
let tasks = [];

// Function to add task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Function to edit task
function editTask(index) {
  const newTask = prompt('Edit task:', tasks[index]);
  
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// Function to delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering
renderTasks();
