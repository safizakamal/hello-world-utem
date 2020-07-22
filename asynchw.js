//produce the same result as per sycchw.js but you only need to use syncronous methods
//for tomorrow to be discussed in class
//fs.readFile
//fs.appendFile
//use example from the documentation to help: https://nodejs.org/api/fs.html

var fs = require('fs')

console.log("Begin reading file");
fs.readFile("input.txt",(err, data)=>{
	if(err) console.log(err)
	console.log(data.toString());
	console.log("End reading file");
	console.log("Appending something");
	fs.appendFileSync("input.txt","I am appending something",(err)=>{
		if(err) console.log(err);
		console.log("Succesfully appending something")
		console.log("Begin re-reading file")
	///////////////////////////
		fs.readFile("input.txt",(err, data)=>{
			if(err) console.log(err)
			console.log(data.toString());
			console.log("Finish re-reading file");
		})	
	})
})



