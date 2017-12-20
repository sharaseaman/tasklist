//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Call all event listeners
loadEventListeners();

//Event Listeners functions
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask); 
    // Remove task item by delete button
    taskList.addEventListener('click', removeTask);
    // Clear all items on clear button click
    clearBtn.addEventListener('click', clearTasks);
    //Filter task
    filter.addEventListener('keyup', filterTasks);

}

//Add Task
function addTask(e){
    if(taskInput.value === '') {
        alert('Add a task');        
    } 
    
    // Create li element
    const li = document.createElement('li');
    // Add class 
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));  
    // Create new link element
    const link = document.createElement('a');
    // Add class to link
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
   
    // Append the li to the ul
    taskList.appendChild(li);
   
   
    //Clear Input
    taskInput.value = '';

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

// Clear All Tasks
function clearTasks(e) {
    // taskList.innerHTML = '';
    // or - Faster Option
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

}



//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}