// Import the data from our data.js file
var tableData = data;

// Select the filter class from our form in index.html
var filter = d3.selectAll(".filter");

// Create event handlers 
filter.on("change", UFO_Data);

// Select the table body of our table in the html 
var table_body = d3.select("tbody");

// Create an empty dictionary that will hold the search filters 
var search_filters = {};

// Complete the event handler function for the form
function UFO_Data() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Create a variable that saves the element that was changed 
    var user_input = d3.select(this).select("input");

    // Create a variable for the value that was input
    var user_filters = user_input.property("value");
    
    // Create a variable for the id that was changed
    var filter_id = user_input.attr("id");

    console.log(user_input);
    console.log(filter_id);

    if (user_filters) {
      search_filters[filter_id] = user_filters;
      }
      else {
        delete search_filters[filter_id];
      }

      // Create variable for our table data to filter based on user input
      var filtered_data = tableData;

      Object.entries(search_filters).forEach(([key, value]) => {
        filtered_data = filtered_data.filter(row => row[key] === value);
      });

    console.log(filtered_data);
    
    // Select the table body of our table in the html 
    table_body.html("");


    // Create a forEach function that will loop through
    // and append our filtered data based on date inputted by user
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