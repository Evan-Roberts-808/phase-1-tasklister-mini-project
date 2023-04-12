// Stretch Deliverables


// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM


// A priority value selected from a dropdown. that is used to determine the color of the text in the list 
//(e.g. red for high priority, yellow for medium, green for low)

const prioritySelect = document.createElement('select');
prioritySelect.id = 'priority';
prioritySelect.innerHTML = `
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>`;
document.querySelector("form").append(prioritySelect);

document.addEventListener("DOMContentLoaded", () => {

  // Prevents default of submit button and grabs the value in the input field
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    createTask(e.target["new-task-description"].value, prioritySelect);
  });

  function createTask(task, prioritySelect) {
    let li = document.createElement('li'); // Creates new list element
    let btn = document.createElement('button'); // Creates new button element
    btn.classList.add('delete-btn'); //adds class to button
    btn.addEventListener('click', deleteTask);
    btn.textContent = 'X'; // Sets button text to X
    li.textContent = `${task} `; // fills the list element with text from the input field

    if (prioritySelect.value === 'low') {
      li.classList.add('low-priority');
    } else if (prioritySelect.value === 'medium') {
      li.classList.add('medium-priority');
    } else if (prioritySelect.value === 'high') {
      li.classList.add('high-priority');
    }

    li.appendChild(btn); //appends the button element to the list element
    document.querySelector('#tasks').appendChild(li); //appends the list element to the DOM
  }

  function deleteTask(e) {
    e.target.parentNode.remove(); // removes the list element from the DOM
  };
});
