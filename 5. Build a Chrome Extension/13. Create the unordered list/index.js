let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
let ulEl = document.getElementById("ul-el");
console.log(ulEl);

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

//For fun test

// for (let i = 0; i < myLeads.length; i++) {
//   console.log(myLeads[i]);
// }

// let i = 0;
// document.getElementsByTagName("body")[0].addEventListener("click", () => {
//   console.log("body clicked");
//   let text = document.createTextNode("Click " + ++i);
//   let h2El = document.createElement("h2");
//   //   console.log(h2El);
//   //   console.log(text);
//   h2El.appendChild(text);
//   document.getElementsByTagName("body")[0].appendChild(h2El);
// });
