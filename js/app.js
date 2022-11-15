// import data from dta.js
const tableData = data;

// References the HTML table using d3
var tbody = d3.select("tbody");

// Building the table

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); 

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        let cell = tbody.append("td");
        cell.test(val)
        }
    );

});