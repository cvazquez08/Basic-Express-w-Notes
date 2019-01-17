// when installing a new pacakage into a project
// REQUIRE all the installed packages
//    name you give       name of package installed
//      |                   |
//      |                   |
const express = require("express");

const app = express();


app.use(express.static('public'));

// get() takes 2 arguments 
// 1. '/' means localhost:3000 
// 2. call back function (request, response, next)

app.get('/', (request, response, next) => {
  // console.log("Display on terminal")
  // response.send('<p>Hello there, <b> IRONHACKERS </b>!!!!</p>')
  response.sendFile(__dirname + '/views/home.html') 
});

app.get('/cat', (req,res,next) => {
  // res.send('<img src="/images/cool-cat.jpg">')
  res.sendFile(__dirname + '/views/cat.html');
})

app.listen(3000, () => console.log("My first express app running on port 3000")) // will remain at the end
// listens to everything before

// app.listen(3000, () => {
//   console.log("My first express app running on port 3000")
// });




