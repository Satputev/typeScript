//this file is the main file in node server
//node server starts the execution from server.js file
//this file used to import and use the following modules
//@fetch    @insert     @update     @delete

//import the express module
let express = require("express");
//import cors module
let cors = require("cors");
//import body-parser module
let bodyparser = require("body-parser");


//to use custom modules, we must create global object by using express module
//global object technically called as rest object
let app = express();
//where "app" is the rest object used to "use the custom modules"


//enable the cors
//enabling the communication between ports
app.use(cors()); 



//set the JSON as Comminication Language Between client and server  (MIME)
app.use(bodyparser.json());


//take the permission to read JSON coming from client
app.use(bodyparser.urlencoded({extended:false}));

//use fetch module
app.use("/fetch",require("./fetch/fetch"));
//use the insert module
app.use("/insert",require("./insert/insert"));
//use the update module
app.use("/update",require("./update/update"));
//use the delete module
app.use("/delete",require("./delete/delete"));

//assign the custom port no to node server
app.listen(8080);
console.log("server listening the port no.8080");




