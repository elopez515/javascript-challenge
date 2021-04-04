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

// Complete the event handler function for the form
function UFO_Data() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var user_date = d3.select("#datetime");

    // Get the value property of the input element
    var user_input = user_date.property("value");

    console.log(user_input);
    console.log(tableData);

    var filtered_data = tableData.filter(date => date.datetime === user_input);

    console.log(filtered_data);

    // Create an array for the city,state,country,shape,duration, & comments
    // var city = filtered_data.map(date => date.city);
    // var state = filtered_data.map(date => date.state);
    // var country = filtered_data.map(date => date.country);
    // var shape = filtered_data.map(date => date.shape);
    // var durationMinutes = filtered_data.map(date => date.durationMinutes);
    // var comments = filtered_data.map(date => date.comments);

    // Select the table body of our table in the html 
    // var table_body = d3.select("tbody");

    table_body.html("");

    // var tr = = 

    // table_body.append("td").text(`${city}`)
    // table_body.append("td").text(`${city}${state}${country}${shape}${durationMinutes}${comments}`)

//     filtered_data.forEach(ufo_info => {
//         let row = document.createElement("tr");

//         Object.values(ufo_info).forEach(info =>{
//             let cell = document.createElement("td");
//             cell.appendChild(document.createTextNode(info));
//             // cell.text(info)
//             row.appendChild(cell);
//         })
//         table_body.appendChild(row);
//     })
//     // table_body.appendChild(table).text(info);


    filtered_data.forEach(ufo_info => {
        let row = table_body.append("tr");

        Object.values(ufo_info).forEach(info =>{
            let cell = row.append("td").text(info);
        })
    })
    // table_body.appendChild(table).text(info);

};
