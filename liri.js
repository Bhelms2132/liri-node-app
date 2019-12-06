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
var request = require("request");




var userInput = process.argv[2];
var parameter = process.argv.slice(3).join(" ");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

//App logic 
function userCommand(){
    // make a decision based on a command
    switch (userInput) {
        case "concert-this":
            bandsInTown(parameter);
            break;
        case "spotify-this-song":
            spotifyThisSong(parameter);
            break;
        case "movie-this":
            movieThis(parameter);
            break;
        case "do-what-it-says":
            getRandom();
            break;
        default:
            console.log("Please Enter a command");
            break;
    }
};

function bandsInTown(parameter){
 if (userInput === "concert-this"){
	var bandName="";
	for (var i = 3; i < process.argv.length; i++){
		bandName+=process.argv[i];
	}
	console.log(bandName);
 }else{
	bandName = parameter;
 }

var queryUrl = "https://rest.bandsintown.com/artists/"+bandName+"/events?app_id=codingbootcamp";

request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var JS = JSON.parse(body);
    for (i = 0; i < JS.length; i++){
        var dTime = JS[i].datetime;
        var month = dTime.substring(5,7);
        var year = dTime.substring(0,4);
        var day = dTime.substring(8,10);
        var dateForm = month + "/" + day + "/" + year
  
      logResult("\n---------------------------------------------------\n");
      logResult("Date: " + dateForm);
      logResult("Name: " + JS[i].venue.name);
      logResult("City: " + JS[i].venue.city);
      if (JS[i].venue.region !== ""){
        logResult("Country: " + JS[i].venue.region);
      }
      logResult("Country: " + JS[i].venue.country);
      logResult("\n---------------------------------------------------\n");
    }
  }
});
};
function spotifyThisSong(parameter) {
  var searchTrack;
   if (parameter === "") {
    searchTrack = "Feathered Indians";
  } else {
    searchTrack = parameter;
  }
  spotify.search({
    type: "track",
    query: searchTrack
  }, function(error, data) {
    if (error) {
      logResult("Error occurred: " + error);
      return;
    } else {
      logResult("\n---------------------------------------------------\n");
      logResult("Artist: " + data.tracks.items[0].artists[0].name);
      logResult("Song: " + data.tracks.items[0].name);
      logResult("Preview: " + data.tracks.items[3].preview_url);
      logResult("Album: " + data.tracks.items[0].album.name);
      logResult("\n---------------------------------------------------\n");
    }
  });
};
function movieThis(parameter) {
  var findMovie;
  if (parameter === "") {
    findMovie = "Mr Nobody";
  } else {
    findMovie = parameter;
  };

  var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";
  
  request(queryUrl, function(err, res, body) {
  	var bodyOf = JSON.parse(body);
    if (!err && res.statusCode === 200) {
      logResult("\n---------------------------------------------------\n");
      logResult("Title: " + bodyOf.Title);
      logResult("Release Year: " + bodyOf.Year);
      logResult("IMDB Rating: " + bodyOf.imdbRating);
      logResult("Rotten Tomatoes Rating: " + bodyOf.Ratings[1].Value); 
      logResult("Country: " + bodyOf.Country);
      logResult("Language: " + bodyOf.Language);
      logResult("Plot: " + bodyOf.Plot);
      logResult("Actors: " + bodyOf.Actors);
      logResult("\n---------------------------------------------------\n");
    }
  });
};
function getRandom() {
 fs.readFile('random.txt', "utf8", function(error, data){
    if (error) {
        return logResult(dateTime + error);
      }
    var dataArr = data.split(",");
     if (dataArr[0] === "spotify-this-song") {
      var songcheck = dataArr[1].trim().slice(1, -1);
      spotSong(songcheck);
    }else if (dataArr[0] === "concert-this") { 
      if (dataArr[1].charAt(1) === "'") {
      	var dLength = dataArr[1].length - 1;
      	var data = dataArr[1].substring(2,dLength);
      	console.log(data);
      	bandsInTown(data);
      }else{
	      var bandName = dataArr[1].trim();
	      console.log(bandName);
	      bandsInTown(bandName);
	  }
  	}else if(dataArr[0] === "movie-this"){
      var movie_name = dataArr[1].trim().slice(1, -1);
      movieInfo(movie_name);
    } 
    });
};
function logResult(dataToLog) {
    console.log(dataToLog);
    fs.appendFile('log.txt', dataToLog + '\n', function(err) {
		if (err) return logResult('Error logging data to file: ' + err);	
	});
};
userCommand();