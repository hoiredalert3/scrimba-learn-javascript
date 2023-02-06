let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
  //create an li element
  //set its text content to myLeads[i]
  //append it to the ul element
  const liEl = document.createElement("li");
  liEl.textContent = myLeads[i];
  ulEl.appendChild(liEl);
}
