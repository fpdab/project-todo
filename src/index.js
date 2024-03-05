import css from "./style.css";

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

class Todo {
  constructor(title, dueDate, priority, status, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.description = description;
  }
}

const buttonNewProject = document.querySelector(".newProject");
buttonNewProject.addEventListener("click", addNewProjectToProjectsList);

function addNewProjectToProjectsList() {
  const title = prompt("Add the title of new project");
  projectsList.push(new project(title));
  renderProjectTabs();
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
    element.projectIndex = projectIndex;
    button.addEventListener("click", () => showProject(projectIndex));
  });
  showProject(projectsList.length - 1);
  const buttonNew = document.createElement("button");
  buttonNew.appendChild(document.createTextNode("New Project"));
  buttonNew.setAttribute("class", "projectButton");
  container.appendChild(buttonNew);
  buttonNew.addEventListener("click", addNewProjectToProjectsList);
}

function showProject(projectIndex) {
  const container = document.querySelector(".todos");
  while (container.firstChild) {
    container.firstChild.remove();
  }
  projectsList[projectIndex].todoList.forEach((element) => {
    container.appendChild(renderTodo(element));
  });
  container.appendChild(showTodoSkeleton(projectIndex));
}

function createTodo(projectIndex) {
  const title = document.querySelector(
    ".todo-container:last-child .title"
  ).value;
  const dueDate = document.querySelector(
    ".todo-container:last-child .dueDate"
  ).value;
  const priority = document.querySelector(
    ".todo-container:last-child .priority"
  ).value;
  const status = document.querySelector(
    ".todo-container:last-child .status"
  ).value;
  const description = document.querySelector(
    ".todo-container:last-child .description"
  ).value;
  const todo = new Todo(title, dueDate, priority, status, description);
  projectsList[projectIndex].todoList.push(todo);
  showProject(projectsList.length - 1);
}

function renderTodo(todo) {
  const container = document.createElement("div");
  container.setAttribute("class", "todo-container");
  const upper = document.createElement("div");
  upper.setAttribute("class", "upper");
  const lower = document.createElement("div");
  lower.setAttribute("class", "lower");

  const title = document.createElement("span");
  title.setAttribute("class", "title");
  title.appendChild(document.createTextNode(todo.title));

  const dueDate = document.createElement("span");
  dueDate.setAttribute("class", "dueDate");
  dueDate.appendChild(document.createTextNode(todo.dueDate));

  const priority = document.createElement("span");
  priority.setAttribute("class", "priority");
  priority.appendChild(document.createTextNode(todo.priority));

  const status = document.createElement("span");
  status.setAttribute("class", "status");
  status.appendChild(document.createTextNode(todo.status));

  const description = document.createElement("span");
  description.setAttribute("class", "description");
  description.appendChild(document.createTextNode(todo.description));

  const titleField = document.createElement("div");
  titleField.setAttribute("class", "titleField");
  upper.appendChild(document.createTextNode("Title: "));
  titleField.appendChild(title);
  upper.appendChild(titleField);

  const dueDateField = document.createElement("div");
  dueDateField.setAttribute("class", "dueDateField");
  upper.appendChild(document.createTextNode("Due Date: "));
  dueDateField.appendChild(dueDate);
  upper.appendChild(dueDateField);

  const priorityField = document.createElement("div");
  priorityField.setAttribute("class", "priorityField");
  upper.appendChild(document.createTextNode("Priority: "));
  priorityField.appendChild(priority);
  upper.appendChild(priorityField);

  const statusField = document.createElement("div");
  statusField.setAttribute("class", "statusField");
  upper.appendChild(document.createTextNode("Status: "));
  statusField.appendChild(status);
  upper.appendChild(statusField);

  const descriptionField = document.createElement("div");
  descriptionField.setAttribute("class", "descriptionField");
  lower.appendChild(document.createTextNode("Description: "));
  descriptionField.appendChild(description);
  lower.appendChild(descriptionField);

  container.appendChild(upper);
  container.appendChild(lower);
  return container;
}

function showTodoSkeleton(projectIndex) {
  const container = document.createElement("div");
  container.setAttribute("class", "todo-container");
  const upper = document.createElement("div");
  upper.setAttribute("class", "upper");
  const lower = document.createElement("div");
  lower.setAttribute("class", "lower");
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("class", "title");
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "text");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("class", "dueDate");
  const priority = document.createElement("input");
  priority.setAttribute("type", "text");
  priority.setAttribute("name", "priority");
  priority.setAttribute("class", "priority");
  const status = document.createElement("input");
  status.setAttribute("type", "text");
  status.setAttribute("name", "status");
  status.setAttribute("class", "status");
  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  description.setAttribute("class", "description");

  const titleField = document.createElement("div");
  titleField.setAttribute("class", "titleField");
  upper.appendChild(document.createTextNode("Title: "));
  titleField.appendChild(title);
  upper.appendChild(titleField);

  const dueDateField = document.createElement("div");
  dueDateField.setAttribute("class", "dueDateField");
  upper.appendChild(document.createTextNode("Due Date: "));
  dueDateField.appendChild(dueDate);
  upper.appendChild(dueDateField);

  const priorityField = document.createElement("div");
  priorityField.setAttribute("class", "priorityField");
  upper.appendChild(document.createTextNode("Priority: "));
  priorityField.appendChild(priority);
  upper.appendChild(priorityField);

  const statusField = document.createElement("div");
  statusField.setAttribute("class", "statusField");
  upper.appendChild(document.createTextNode("Status: "));
  statusField.appendChild(status);
  upper.appendChild(statusField);

  const descriptionField = document.createElement("div");
  descriptionField.setAttribute("class", "descriptionField");
  lower.appendChild(document.createTextNode("Description: "));
  descriptionField.appendChild(description);
  lower.appendChild(descriptionField);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.addEventListener("click", () => createTodo(projectIndex));
  lower.appendChild(submitButton);

  container.appendChild(upper);
  container.appendChild(lower);
  return container;
}
