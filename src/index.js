import css from "./style.css";
import showTodoSkeleton from "./showTodoSkeleton";

const projectsList = [];

class project {
  constructor(title) {
    this.todoList = [];
    this.title = title;
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

function renderProject() {}

function showProject(projectIndex) {
  projectsList[projectIndex]; //<<< trzeba to wyswietlic
}

function renderProjectTabs() {
  const container = document.querySelector(".buttons");
  while (container.firstChild) {
    container.firstChild.remove();
  }
  projectsList.forEach((element) => {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(element.title));
    container.appendChild(button);
    const projectIndex = projectsList.indexOf(element);
    button.addEventListener("click", () => showProject(projectIndex));
  });
  const buttonNew = document.createElement("button");
  buttonNew.appendChild(document.createTextNode("New Project"));
  buttonNew.setAttribute("class", "projectButton");
  container.appendChild(buttonNew);
  buttonNew.addEventListener("click", addNewProjectToProjectsList);
  console.log(projectsList);
}

function addNewProjectToProjectsList() {
  const title = prompt("Add the title of new project");
  projectsList.push(new project(title));
  renderProjectTabs();
}

const buttonNewProject = document.querySelector(".newProject");
buttonNewProject.addEventListener("click", addNewProjectToProjectsList);

function addNewTodo() {
  const container = document.querySelector(".todos");
  container.appendChild(showTodoSkeleton());
}

const buttonTodo = document.querySelector(".newTodo");
buttonTodo.addEventListener("click", addNewTodo);
