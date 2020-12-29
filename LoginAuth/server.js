//node engine starts the execution from "server.js" file.

let express = require("express");
let cors = require("cors");
let bodyparser = require("body-parser");

let app = express();

app.use(cors());

app.use(bodyparser.json());

//read the JSON coming from client
//taking the permission
app.use(bodyparser.urlencoded({ extended: false }));


//use the login module
app.use("/login", require("./login/login"));

//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");