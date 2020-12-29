let mssql = require("mssql");

let obj = require("../config/config");

module.exports = require("express").Router().put("/", (req, res) => {
    mssql.connect(obj, (err) => {
        if (err) {
            console.log("connection fapl");
        } else {
            let request = new mssql.Request();
            request.query(`update from products set p_name='${req.body.pname},p_cost=${req.body.pcost},where p_id=${req.body.pid}`, (err, result) => {
                if (err) {
                    res.send({ update: "fail" });

                } else {
                    res.send({ update: "sucess" });
                }
                mssql.close();
            });
        }
    });
});