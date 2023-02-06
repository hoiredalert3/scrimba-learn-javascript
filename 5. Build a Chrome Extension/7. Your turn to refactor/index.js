// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
  console.log("Button clicked from function!");
}

let saveBtn = document.getElementById("input-btn");
saveBtn.addEventListener("click", saveLead);
