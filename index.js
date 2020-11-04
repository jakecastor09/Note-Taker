const userInput = document.querySelector(".note-input");
const addButton = document.querySelector(".add-note");
const row = document.querySelector(".row");
const modal = document.querySelector(".modal");
let count = 0;
const content = [];
const userInputNote = [];

//For Enter keypress to add note
document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) addNote();
});
//For click to add note
addButton.addEventListener("click", () => {
  addNote();
});

document.addEventListener("click", (e) => {
  if (e.target.className.includes("detail")) {
    //Insert all text
    popup(userInputNote[e.target.id]);
    modal.style.visibility = "visible";
  }
  //To hide modal
  if (e.target.className.includes("fas")) {
    modal.style.visibility = "hidden";
  }
});

function addNote() {
  userInputNote.push(userInput.value);
  //Cut text
  const sliceNote =
    userInput.value.length >= 120
      ? userInput.value.slice(0, 120) + "....."
      : userInput.value;

  content.push(noteContent(++count, sliceNote));
  row.innerHTML = addAll();
  userInput.value = "";
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
  <div class="col note" >
        <h2>Note ${count}</h2>
        <p>${userInput}</p>
        <button class="btn-small detail" id="${count - 1}">View Detail</button>
    </div>
  `;
}

function addAll() {
  const all = content.map((item) => {
    return item;
  });
  return all;
}
