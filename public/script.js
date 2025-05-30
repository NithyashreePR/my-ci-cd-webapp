// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();
  
//     if (taskText === '') return;
  
//     const li = document.createElement('li');
//     li.textContent = taskText;
  
//     // Create Remove Button
//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.className = 'remove-btn';
//     removeBtn.onclick = () => li.remove();
  
//     li.appendChild(removeBtn);
//     document.getElementById('taskList').appendChild(li);
  
//     taskInput.value = '';
//   }

const tasks = [];
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  


  if (taskText === '') return;

  tasks.push({ text: taskText, priority });


  renderTasks(); 

  taskInput.value = '';
  prioritySelect.value = 'low'; // Reset
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const priorityOrder = { high: 1, medium: 2, low: 3 };
  tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = task.text;

    const priorityTag = document.createElement('span');
    priorityTag.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    priorityTag.className = `priority-tag ${task.priority}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    li.appendChild(taskTextSpan);
    li.appendChild(priorityTag);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
  });
}

  