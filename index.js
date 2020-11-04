const userInput = document.querySelector(".note-input");
const addNote = document.querySelector(".add-note");
const row = document.querySelector(".row");

let count = 0;
const content = [];
addNote.addEventListener("click", () => {
  const sliceNote =
    userInput.value.length >= 120
      ? userInput.value.slice(0, 120) + "....."
      : userInput.value;

  content.push(noteContent(++count, sliceNote));
  row.innerHTML = addAll();
  userInput.value = "";
});

function noteContent(count, userInput) {
  return `
  <div class="col note">
        <h2>Note ${count}</h2>
        <p>${userInput}</p>
        <button class="btn-small">View Detail</button>
    </div>
  `;
}
function addAll() {
  const all = content.map((item) => {
    return item;
  });
  return all;
}
