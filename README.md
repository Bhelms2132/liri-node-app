# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will is a command line node app that takes in parameters and gives you back data. 

## Link to LIRI-NODE-APP
https://youtu.be/H8btsIC2JAk

## Technologies used
Javascript, Node.js, NPM packages (axios, dotenv, moment, node-spotify-api)


## How LIRI works

Open app then in the command terminal enter command (node liri.js concert-this "artist/band name here").

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:


Name of the venue


Venue location


Date of the Event (use moment to format this as "MM/DD/YYYY")

The user can change the bands name on line 48 in liri.js file to their desired singer or bands name.

![image](https://user-images.githubusercontent.com/52431116/72690050-41db4680-3ae6-11ea-80c4-ad30addade68.png)



Command (node liri.js movie-this  "movie name here")
This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
![image](https://user-images.githubusercontent.com/52431116/72690249-794af280-3ae8-11ea-8f33-0d59a324b49d.png)

Enter command node liri.js spotify-this-song "song name here"
This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.
![image](https://user-images.githubusercontent.com/52431116/72690660-92ee3900-3aec-11ea-9dfb-74fcdb2d179f.png)








node liri.js spotify-this-song



