let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

console.log(inputEl);

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function () {
  console.log("Button clicked!");
  myLeads.push("www.awesomelead.com");
  console.log(myLeads.join());
});
