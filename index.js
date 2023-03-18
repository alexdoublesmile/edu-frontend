const mainNavigation = document.querySelector(".main-navigation");
const firstNavButton = document.querySelector(".main-navigation__button-item");
const navButtons = document.querySelectorAll(".main-navigation__button-item");
const deleteButtons = document.querySelectorAll(".task-item__delete-button");
console.log(mainNavigation)

console.log(typeof mainNavigation);

deleteButtons.forEach(button => button.textContent = "Remove...");
// deleteButtons.forEach(button => button.innerHTML = "");

const taskForm = document.querySelector("create-task-block");
// console.log(taskForm.children);

const firstButton = document.querySelector(".task-item__delete-button");
console.log(firstButton.style);
// firstButton.style.background = "yellow";


// create Element
const newNavButton = document.createElement("a");
newNavButton.className = "main-navigation__button-item";
newNavButton.href = "#tasks_expired";
newNavButton.dataset.buttonId = "4";
newNavButton.textContent = "Expired tasks";
console.log(newNavButton);

// add Element
// mainNavigation.append(newNavButton);
// mainNavigation.insertAdjacentElement("afterbegin", newNavButton);

// remove element
// mainNavigation.remove();

// attributes
const createTaskInput = document.querySelector(".create-task-block__input");
// createTaskInput.hasAttribute("type");
// createTaskInput.getAttribute("type");
// createTaskInput.removeAttribute("type");
// createTaskInput.setAttribute("type", "text");

// listeners
navButtons.forEach(button => button.addEventListener("click", event => {
    navButtons.forEach(button => button.classList.remove("main-navigation__button-item_selected"));
    // const { target } = event;
    const target = event.target;
    target.classList.add("main-navigation__button-item_selected");
}));

const createForm = document.querySelector(".create-task-block");
createForm.addEventListener("submit", event => {
    console.log(event);
    event.preventDefault();
    
    const target = event.target;
    const taskName = target.taskName.value;
    console.log(taskName);
});

// const createForm = document.querySelector(".create-task-block");
document.addEventListener("keydown", event => {
    const key = event.key;
    // console.log(event);
    console.log(key);
    
    const task = document.querySelector(`[data-task-id="${key}"]`);
    if (task) {
        const deleteConfirmed = confirm(`Do you really want to remove task ${key}?`)
        if (deleteConfirmed) {
            task.remove();
        }
    }
});