class TableData {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var table = [];

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", event => setUp());
} else {
  setUp();
}

function setUp() {
  document.getElementById("filter-table").onclick = event => {
    event.preventDefault();
    let filter = document.getElementById("filter-by-name").value;
    clearTable();
    if (filter !== "") {
      let filteredTable = filterTable(filter);
      populateTable(filteredTable);
    }
  };
  document.getElementById("reset-table").onclick = event => {
    event.preventDefault();
    clearTable();
    populateTable(this.table);
  };
  setUpDummyTable();
  populateTable(this.table);
}

function setUpDummyTable() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      this.table.push(new TableData("Mike", 27));
    } else {
      this.table.push(new TableData("Amelia", 26));
    }
  }
}

function populateTable(tableReference) {
  let targetTable = document.getElementById("table-body");
  for (let i = 0; i < tableReference.length; i++) {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    td_name.innerText = tableReference[i].name;
    let td_age = document.createElement("td");
    td_age.innerText = tableReference[i].age;
    tr.appendChild(td_name);
    tr.appendChild(td_age);
    targetTable.appendChild(tr);
  }
}

function filterTable(name) {
  clearTable();
  let tableClone = JSON.parse(JSON.stringify(table));
  return tableClone.filter(tableData => tableData.name === name);
}

function clearTable() {
  let targetTable = document.getElementById("table-body");
  while (targetTable.firstChild)
    targetTable.removeChild(targetTable.firstChild);
}
