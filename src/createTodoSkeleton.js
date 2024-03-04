export default function createTodoSkeleton() {
  const container = document.createElement("div");
  container.setAttribute("class", "todo-container");
  const upper = document.createElement("div");
  upper.setAttribute("class", "upper");
  const lower = document.createElement("div");
  lower.setAttribute("class", "lower");
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("id", "title");
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "text");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("id", "dueDate");
  const priority = document.createElement("input");
  priority.setAttribute("type", "text");
  priority.setAttribute("name", "priority");
  priority.setAttribute("id", "priority");
  const status = document.createElement("input");
  status.setAttribute("type", "text");
  status.setAttribute("name", "status");
  status.setAttribute("id", "status");
  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  description.setAttribute("id", "description");

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
  upper.appendChild(descriptionField);

  container.appendChild(upper);
  container.appendChild(lower);
  return container;
}
