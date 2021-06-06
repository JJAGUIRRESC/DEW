var employees = [
  { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
  { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
  { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
  { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
]

// MAIN TABLE
var employeesTable = document.getElementById("table-container");
var table = document.createElement('TABLE');
var tableHead = document.createElement('THEAD');
var tableBody = document.createElement('TBODY');
table.appendChild(tableHead);
table.appendChild(tableBody);

// TABLE HEAD
var tr = document.createElement('TR');
tableHead.appendChild(tr);
tr.innerHTML = "<th>ID</th><th>NAME</th><th>DEPARTMENT</th>";

// TABLE BODY
employees.forEach(employee => {
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);

  tr.innerHTML = "<td>" + employee.id + "</td>"
    + "<td>" + employee.name + "</td>"
    + "<td>" + employee.department + "</td>";
});

table.style.textAlign = "center";
employeesTable.appendChild(table);