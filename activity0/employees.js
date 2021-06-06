var employees = [
  { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
  { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
  { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
  { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
]

function showEmployees() {
  employees.forEach(employee => alert(
    "Name: " + employee.name + "\n"
    + "ID: " + employee.id + "\n"
    + "Department: " + employee.department)
  );
}