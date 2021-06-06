$.ajax({
    type: "Get",
    url: "./employees.json",
    dataType: "json",
    success: function (response) {
        createTable(response);
    },
    error: function (xhr, status) {
        alert("File not found.");
    }
});

function createTable(response) {
    var employeesTable = document.getElementById("table-container");
    var table = document.createElement('TABLE');

    // Table header
    $('<tr>').html(
        "<th>ID</th>" +
        "<th>NAME</th>" +
        "<th>DEPARTMENT</th>"
    )
        .appendTo(table);

    // Table body
    $.each(response, function (i, emp) {

        $('<tr>').html(
            "<td>" + response[i].id +
            "</td><td>" + response[i].name +
            "</td><td>" + response[i].department +
            "</td>")
            .appendTo(table);
    });

    table.style.textAlign = "center";
    employeesTable.appendChild(table);

}