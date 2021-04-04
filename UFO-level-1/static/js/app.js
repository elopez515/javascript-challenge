// Import the data from our data.js file
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

// Complete the event handler function for the form
function UFO_Data() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Create a variable that saves the element that was changed
    var user_date = d3.select("#datetime");

    // Create a variable for the value that was input
    var user_input = user_date.property("value");

    // Create a variable for our table data that will filter based on date
    var filtered_data = tableData.filter(date => date.datetime === user_input);

    console.log(filtered_data);

    // Select the table body of our table in the html 
    table_body.html("");

    // Create a forEach function that will loop through
    // and append our filtered data based on date input by user
    filtered_data.forEach(ufo_info => {
        let row = table_body.append("tr");

        Object.values(ufo_info).forEach(info =>{
            let cell = row.append("td").text(info);
        })
    })

};

// Adding global variable using our forEach function so the page 
// will preload with a table containing all of our data
tableData.forEach(ufo_info => {
    let row = table_body.append("tr");

    Object.values(ufo_info).forEach(info =>{
        let cell = row.append("td").text(info);
    })
})