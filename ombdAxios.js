var axious = require("axios");

axious.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response){
        console.log("" + response.data.imdbRating);
  })
  .catch(function(error){
    if (error.response){
        console.log("--------Data--------");
        console.log(error.response.data);
        console.log("-------Status-------");
        console.log(error.response.status);
        console.log("-------Status-------");
        console.log(error.response,headers);
    }else if(error.request){
        console.log(error.request);
    }else{
        console.log("Error", error.message);
    }
    console.log(error.config);
  });