let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

console.log(location.href);

const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

tabBtn.addEventListener("click", function () {
  // Grab the URL of the current tab!
  // chrome.tabs.query({ active: true, currentWindow: true }, (chromeTabs) => {
  //   let url = chromeTabs[0].url;
  //   console.log(url);
  //   // use `url` here inside the callback because it's asynchronous!
  // });
  // myLeads.push(tabs[0].url);

  chrome.tabs.query({ active: true, currentWindow: true }, (chromeTabs) => {
    console.log(`Chrome tab url: ${chromeTabs[0].url}`);
    myLeads.push(chromeTabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
