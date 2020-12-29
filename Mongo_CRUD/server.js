//this file is the main file in the node server
//node server starts the execution from server.js file
//this file is used to import and use the following modules
//@fetch   @insert   @update    @delete
//import the express module

let express = require("express"); //to use any module we use this super obj
//import the cors module
let cors = require("cors");

//import body parser module
let bodyparser = require("body-parser");

//to use custum module we must create global object by using express module
//global object technically called as  rest object
let app = express();

//here app is the rest obj used to use the custom modules

//enables cors
//enabling the communication between ports
app.use(cors());
//set JSON as the communication language between client and server(MIME)
app.use(bodyparser.json());

//take the permission to read JSON comming fromm client

app.use(bodyparser.urlencoded({ extended: false }));

//use fetch module

app.use("/fetch", require("./fetch/fetch"));

//use the insert module
app.use("/insert", require("./insert/insert"));

//use the update module

app.use("/update", require("./update/update"));

//use the delete module

app.use("/delete", require("./delete/delete"));

//assign the custom port no to node server
app.listen(8080);
console.log("server listening the port no:8080");