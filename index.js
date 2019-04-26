const http = require('http');
const fs = require('fs');
const data = require('./top_2018_movies.json');

var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();
}) .listen(3000);

//Create a function that lists all the movies

//Create a function that lists the movies that grossed above 20 million and genre is action

//Create a function that lists the movies that are rated "PG-13" and number of tickets solid is between 1 and 5 million

//Create a function that sorts the movies based on "distributor"

