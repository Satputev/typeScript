//this file is used to fetch the data from products table
//we wii make this file as module
//require is the predefined function in nodejs used to import the module

//import mssql module

let mssql = require("mssql");

//import the database credentials
let obj = require("../config/config");

//create a module

module.exports = require("express").Router().get("/", (req, res) => {

    mssql.Connect(obj, (err) => {
        if (err) {
            console.log("connection failed !!!!!");
        } else {
            //create the request object
            //request object used to execute query
            let request = new mssql.Request();
            request.query(`select * from products`, (err, records) => {
                if (err) {
                    res.send({ fetch: "error" });

                } else {
                    res.send(records.recordset);
                }
                mssql.close();
            });
        }
    });
});