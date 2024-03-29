let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  //   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  listItems += "<li>" + myLeads[i] + "</li>";
}
// console.log(listItems);

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;

//Test to compare time taken between manipulating DOM 1e5 time and manipulating DOM only 1 time
// let str = "";

// for (let i = 0; i < 1e5; ++i) {
//   //   ulEl.innerHTML += "<br/>" + i;
//   str += "<br/>" + i;
// }

// ulEl.innerHTML = str;
