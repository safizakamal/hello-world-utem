var fs = require('fs')

var data = fs.readFileSync("input.txt");//read a file
console.log(data.toString());//get the response
console.log("Program ended");
