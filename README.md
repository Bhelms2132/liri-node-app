# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will is a command line node app that takes in parameters and gives you back data. 

## How LIRI works

Open app then in the command terminal enter command (node liri.js concert-this).

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:


Name of the venue


Venue location


Date of the Event (use moment to format this as "MM/DD/YYYY")

The user can change the bands name on line 48 in liri.js file to their desired singer or bands name.

![image](https://user-images.githubusercontent.com/52431116/72690050-41db4680-3ae6-11ea-80c4-ad30addade68.png)

When the users add "node liri.js movie-this" to the comand terminal, Liri will return 
![image](https://user-images.githubusercontent.com/52431116/72690249-794af280-3ae8-11ea-8f33-0d59a324b49d.png)
## Technologies used
Javascript, Node.js NPM packages (axios, dotenv, moment, node-spotify-api)

## Link to LIRI-NODE-APP
https://youtu.be/H8btsIC2JAk






node liri.js spotify-this-song



