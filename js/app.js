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
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value    
        filteredData = filteredData.filter(row => row.datetime === date)

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData)
    };
}

d3.selectAll("#filter-btn").on("click", handleClick);


// build the table when the webpage loads

buildTable(tableData);