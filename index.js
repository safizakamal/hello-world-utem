
//import { lowerCase, localeLowerCase } from "lower-case";
//const play= require("stringplay");
//var lowerCase = require("lower-case")
var http = require('http');
http.createServer(function (req, res) 
{   res.writeHead(200, {'Content-Type':'text/plain'});    
	res.end('Hello Node!');
}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate....');

//what is a server?
//A server is a computer which is accessible on the network

//What is internet?
//Interconnection of network (connection between all the computers or devices or objects)

//Domain Name -> to translate the IP address which hosts our application or website into human readable address

//IP address -> Address to identify a computer in a network e.g. x.x.x.x Private IP address
//port -> is used to differentiate which application to open when request coming in

//In a server, or in a computer I can host multiple application.. for example
//host website
//online Game Dota
//Stream film - netflix

//200 is the standard response by server in case of successful connection

//node package manager (npm) - Dependency Management
//it manage the dependencies library packages
//we can resuse
//for example, in android gradle as a package manager

//ios - cocopods is user as package manager

//npm install -g nodemon
//mac --> sudo npm install -g nodemon
//-g means everywhere

//i want to install nodemon inside my entire PC
//npm install express (see tomorrow)
