const container = document.getElementById("container");

container.innerHTML = "<button onclick='say()'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function say() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}
