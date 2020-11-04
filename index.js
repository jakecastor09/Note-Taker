const userInput = document.querySelector(".note-input");
const addButton = document.querySelector(".add-note");
const row = document.querySelector(".row");
const modal = document.querySelector(".modal");
let count = 0;
const content = [];
const userInputNote = [];

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) addNote();
});

addButton.addEventListener("click", () => {
  addNote();
});

document.addEventListener("click", (e) => {
  if (e.target.className.includes("detail")) {
    const allText = userInputNote[userInput.which - 1];
    popup(allText);
    modal.style.visibility = "visible";
  }
  if (e.target.className.includes("fas")) {
    modal.style.visibility = "hidden";
  }
});

function addNote() {
  userInputNote.push(userInput.value);
  const sliceNote =
    userInput.value.length >= 120
      ? userInput.value.slice(0, 120) + "....."
      : userInput.value;

  content.push(noteContent(++count, sliceNote));
  row.innerHTML = addAll();
  userInput.value = "";
  userInput.which = count;
}

function popup(text) {
  modal.innerHTML = `
  <div class="modal-content">
      <span class="btn-remove"><i class="fas fa-times"></i></span>
      <p class="modal-text">${text}</p>
    </div>
  `;
}

function noteContent(count, userInput) {
  return `
  <div class="col note">
        <h2>Note ${count}</h2>
        <p>${userInput}</p>
        <button class="btn-small detail">View Detail</button>
    </div>
  `;
}

function addAll() {
  const all = content.map((item) => {
    return item;
  });
  return all;
}
