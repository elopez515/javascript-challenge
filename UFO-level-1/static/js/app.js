// from data.js
var tableData = data;

// Select the button tag from out index.html
var button = d3.select("#filter-btn");

// Select the form tag from out index.html
var form = d3.select("form");

// Create event handlers 
button.on("click", UFO_Data);
form.on("submit",UFO_Data);

// Select the table body of our table in the html 
var table_body = d3.select("tbody");
