document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const toggleThemeBtn = document.getElementById('toggle-theme');
  
    // Load tasks from local storage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => addTaskToDOM(task));
    };
  
    // Add task to DOM
    const addTaskToDOM = (task) => {
      const li = document.createElement('li');
      li.textContent = task;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
      };
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    };
  
    // Save tasks to local storage
    const saveTasks = () => {
      const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Add task
    addTaskBtn.addEventListener('click', () => {
      const task = taskInput.value.trim();
      if (task) {
        addTaskToDOM(task);
        saveTasks();
        taskInput.value = '';
      }
    });
  
    // Toggle theme
    toggleThemeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  
    loadTasks();
  });
  