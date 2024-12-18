// Select elements
const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task with time
function addTask() {
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    if (taskTime === '') {
        alert('Please select a time for the task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    // Add the task text and time
    listItem.innerHTML = `
        ${taskText} <span class="time">[${taskTime}]</span>
        <span class="delete" onclick="deleteTask(this)">X</span>
    `;

    // Append the task to the list
    taskList.appendChild(listItem);

    // Clear the input fields
    taskInput.value = '';
    timeInput.value = '';
}

// Function to delete a task
function deleteTask(element) {
    element.parentElement.remove();
}

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter key to add task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
