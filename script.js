const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});


const fs = require("fs");
   
// Read users.json file
fs.readFile("data.json", function(err, data) {
    // Check for errors
    if (err) throw err;
    // Converting to JSON
    const users = JSON.parse(data);
    console.log(users); // Print users 
});

// STEP 1: Reading JSON file
const users = require("./data.json");
   
// Defining new user
var user = 
    {
    ID: 9,
    Name: "Sree Kanth",
    sname:"4 Wheeler",
    sfee:12000,
}
;
   
// STEP 2: Adding new data to users object
users.push(user);
   
// STEP 3: Writing to a file
fs.writeFile("data.json", JSON.stringify(users), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
})