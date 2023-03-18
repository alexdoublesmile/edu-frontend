const mainNavigation = document.querySelector(".main-navigation");
const firstNavButton = document.querySelector(".main-navigation__button-item");
const navButtons = document.querySelectorAll(".main-navigation__button-item");

const taskForm = document.querySelector(".create-task-block");
const taskInput = document.querySelector(".create-task-block__input");

const firstButton = document.querySelector(".task-item__delete-button");
const deleteButtons = document.querySelectorAll(".task-item__delete-button");
console.log(mainNavigation)

console.log(typeof mainNavigation);

deleteButtons.forEach(button => button.textContent = "Remove...");
// deleteButtons.forEach(button => button.innerHTML = "");

// console.log(taskForm.children);

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
// taskInput.hasAttribute("type");
// taskInput.getAttribute("type");
// taskInput.removeAttribute("type");
// taskInput.setAttribute("type", "text");

// listeners
navButtons.forEach(button => button.addEventListener("click", event => {
    navButtons.forEach(button => button.classList.remove("main-navigation__button-item_selected"));
    // const { target } = event;
    const target = event.target;
    target.classList.add("main-navigation__button-item_selected");
}));

taskForm.addEventListener("submit", event => {
    console.log(event);
    event.preventDefault();
    
    const target = event.target;
    const taskName = target.taskName.value;
    console.log(taskName);
});

document.addEventListener("keydown", event => {
    console.log("keydown");
});

document.addEventListener("keyup", event => {
    const key = event.key;
    console.log("keyup");
    
    const task = document.querySelector(`[data-task-id="${key}"]`);
    if (task) {
        const deleteConfirmed = confirm(`Do you really want to remove task ${key}?`)
        if (deleteConfirmed) {
            task.remove();
        }
    }
});

const createTooltip = text => {
    const tooltip = document.createElement("span");
    tooltip.textContent = text;
    tooltip.className = "tooltip";

    return tooltip;
}

deleteButtons.forEach(button => button.addEventListener("mouseover", event => {
    const target = event.target;
    // console.log(target);

    const taskItemHTML = target.closest(".task-item");
    const taskId = taskItemHTML?.dataset.taskId;
    if (taskId) {
        const tooltipHTML = createTooltip(`Remove ${taskId}?`);
        target.append(tooltipHTML);
    }
}));

deleteButtons.forEach(button => button.addEventListener("mouseout", event => {
    const target = event.target;
    const tooltip = document.querySelector(".tooltip");
    tooltip.remove();
}));

const checkInputNotValid = value => {
    if (!value || value.includes("@")) {
        return true;
    }
    return false;
};

taskInput.addEventListener("input", event => {
    const target = event.target;
    const value = target.value;
    const notValid = checkInputNotValid(value);
    const errorMsg = document.querySelector(".error-message-block");

    if (notValid) {
        const errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message-block");
        errorMessage.textContent = "Error text! Not empty and no @!"
        taskForm.append(errorMessage);
    } else if (!notValid && errorMsg) {
        errorMsg.remove();
    }
});