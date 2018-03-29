const http = require("http");
const fs = require("fs");
const data = require("./top_2018_movies.json");

const PORT = 3000

function invalid(){
    respond.statusCode = 404;
    console.log("Invalid Route.");
    response.write("404 page, you requested a page that doesn't exist.");  
    response.end();  
}

let server = http.createServer(function (request, response) {
  if((request.url === "/") && (request.method === "GET")){ //Creating a route
    respond.statusCode = 500;
    response.write("<h1>This is the index page</h1>");
    response.end();

  }else
    respond.statusCode = 404;
    console.log("Invalid Route.");
    response.write("404 page, you requested a page that doesn't exist.");  
    response.end(); 
  

  //Create a function that lists all the movies
  if(request.url === "/all_movies" && request.method === "GET"){
    respond.statusCode = 200;
    response.write("<h2> These are all the movies</h2>");
    data.forEach(x => response.write(x.movie = "\n"));
    response.end();
  }else{
    respond.statusCode = 404;
    console.log("Invalid Route.");
    response.write("404 page, you requested a page that doesn't exist.");  
    response.end(); 
  }

  //Create a fuction that lists the movies that grossed above 20 million and genre is action
  if(request.url === "/action" && request.method === "GET"){
    respond.statusCode = 250;
    response.write("<h2> These are all the movies from the action genre with at least a gross of $20 million.</h2>");
    data.forEach(x => response.write(x.movie = "\n"));
    response.end();
  }else{
    invalid();
  }

  //Create a function that lists the movies that are rated "PG-13" and number of tickets sold is between 1 and 5 million
  if(request.url === "/pg" && request.method === "GET"){
    respond.statusCode = 300;
    response.write("<h2> These are all the movies rated PG-13 with 1 to 5 million tickets sold.</h2>");
    data.forEach(x => response.write(x.movie = "\n"));
    response.end();
  }else{
    invalid();
  }

  //Create a function that sorts the movies based on "distributor"
  if(request.url === "/distributor" && request.method === "GET"){
    respond.statusCode = 400;
    response.write("<h2> The movies are sorted by distributor.</h2>");
    data.forEach(x => response.write(x.movie = "\n"));
    response.end();
  }else{
    invalid();
  }

})
server.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
});