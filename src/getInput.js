export default function getInput(todo, inputId) {
  const input = document.querySelector(inputId);
  todo[inputId] = input.textContent;
}
