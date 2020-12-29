let mssql = require("mssql");

let obj = require("../config/config");

module.exports = require("express").Router().post("/", (req, res) => {
            mssql.Connect(obj, (err) => {
                    if (err) {
                        console.log("connection fail");
                    } else {
                        let request = new mssql.Request();
                        request.query(`insert into products values(${req.body.pid},'${req.body.pname}',${request.body.pcost})`, (err, result) => {
                                if (err) {
                                    res.send({
                                            insert: "fail}");
                                    }
                                    else {
                                        res.send({ insert: "sucess" });
                                    }
                                    mssql.close();
                                });
                        }
                    });
            });