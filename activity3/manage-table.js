/* Create the table if the value of the inputs are correct */
function createTable() {
    clearTable();

    // Check the input fields before create the table
    if (checkInput()) {
        let rows = document.getElementById("input-rows").value;
        let cols = document.getElementById("input-cols").value;

        // MAIN TABLE
        let tableContainer = document.getElementById("table-container");
        let table = document.createElement("table");
        let tableBody = document.createElement("tbody");

        // TABLE BODY
        for (let i = 1; i <= rows; i++) {
            let row = document.createElement("tr");

            for (let j = 1; j <= cols; j++) {
                let dataCell = document.createElement("td");
                let dataCellText = document.createTextNode("ROW: " + i + ", COL: " + j);

                dataCell.appendChild(dataCellText);
                row.appendChild(dataCell);
            }

            tableBody.appendChild(row);
        }

        table.appendChild(tableBody);
        table.style.textAlign = "center";
        tableContainer.appendChild(table);
    }
}

/* Clear the container removing paragraphs and tables */
function clearTable() {
    let tableContainer = document.getElementById("table-container");

    if (tableContainer.hasChildNodes()) {

        for (let i = 0; i < tableContainer.childElementCount; i++) {
            tableContainer.removeChild(tableContainer.lastChild);
        }

    }
}

/* Check the input fields */
function checkInput() {

    let correctValue = true;
    let rows = document.getElementById("input-rows").value;
    let cols = document.getElementById("input-cols").value;

    if (rows.length == 0 || rows < 1) {
        correctValue = false;
    } else if (cols.length == 0 || cols < 1) {
        correctValue = false;
    }

    if (!correctValue) {
        let tableContainer = document.getElementById("table-container");
        let errorText = document.createElement("p");
        errorText.innerHTML = "Los datos introducidos no son correctos, verifíquelos e inténtelo de nuevo.";
        errorText.style.color = "red";
        errorText.style.fontWeight = "bold";
        tableContainer.appendChild(errorText);
    }

    return correctValue;
}