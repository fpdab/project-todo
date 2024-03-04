import css from "./style.css";
import createTodoSkeleton from "./createTodoSkeleton";

const projectsList = [];

class project {
  constructor(title) {
    this.todoList = [];
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  actualizeDate(dueDate) {
    this.dueDate = dueDate;
  }
}

class todo {
  constructor(title, dueDate, priority, status, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.decription = description;
  }
  addTodoToProject() {}
}

function showTab() {}

function renderTabs() {
  const container = document.querySelector(".buttons");
  while (container.firstChild) {
    container.firstChild.remove();
  }
  projectsList.forEach((element) => {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(element.title));
    container.appendChild(button);
    button.addEventListener("click", showTab);
  });
  const buttonNew = document.createElement("button");
  buttonNew.appendChild(document.createTextNode("New Project"));
  buttonNew.setAttribute("class", "projectButton");
  container.appendChild(buttonNew);
  buttonNew.addEventListener("click", addNewProjectToProjectsList);
}

function addNewProjectToProjectsList() {
  const title = prompt("Add the title of new project");
  projectsList.push(new project(title));
  renderTabs();
}

const buttonNewProject = document.querySelector(".newProject");
buttonNewProject.addEventListener("click", addNewProjectToProjectsList);

const todos = document.querySelector(".todos");
todos.appendChild(createTodoSkeleton());
