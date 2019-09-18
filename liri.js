//fs is a core Node package for reading and writing files
var fs = require("dotenv").config();

// This block of code will read from the .... file
fs.readFile("random.txt", "utf8", function(error,data){
    if (error) {
        return console.log(error);
    }
    //This will print the contents of data
    console.log(data);
    //Then spilt it by commas for read ability
    var dataArr = data.split(",");
    //Then re-display the content as an array for later use.
    console.log(dataArr);
});