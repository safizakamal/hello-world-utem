var fs = require('fs')

fs.readFile("input.txt", (err,data)=>{
	if(err) console.log(err);
	console.log(data.toString())
})
console.log("Program ended!");
