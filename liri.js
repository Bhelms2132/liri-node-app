require("dotenv").config();
//fs is a core Node package for reading and writing files
var fs = require("fs");
//code to pull from key.js file
var key = require("./key.js");
//code allows to access keys information
var spotify = new spotify(key.spotify);
//require moment
var moment = require("moment");
//require node-spotify-api
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);




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

searchfunction({ 
    type: 'artist OR album OR track', 
    query: 'My search query', 
    limit: 20 }, 
    callback
    );
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });

var userInput = process.argv[3];
//App logic 
function userCommand(userInput){
    // mkae a decision based on a command
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifythissong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userQuery);
            break;
        default:
            console.log("I don't understand");
            break;
    }
}
userCommand();