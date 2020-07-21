//produce the same result as per sycchw.js but you only need to use syncronous methods
//for tomorrow to be discussed in class
//fs.readFile
//fs.appendFile
//use example from the documentation to help: https://nodejs.org/api/fs.html

var fs = require('fs')

console.log("Begin reading file");
var data = fs.readFileSync("input.txt");//read a file
console.log(data.toString());//get the response
console.log("End reading file")
console.log("Begin appending file")
fs.appendFileSync("input.txt","I am appending a file")
console.log("End appending file")
console.log("Begin re-reading file")
var anotherData = fs.readFileSync("input.txt")
console.log(anotherData.toString());
console.log("Finish re-reading file")
