let mssql = require("mssql");
let obj = require("../config/config");

module.exports = require("express").Router().delete("/", (req, res) => {
    mssql.connect(obj, (err) => {
        if (err) {
            console.log("connection fail");

        } else {
            let request = new mssql.Request();
            request.query(`delete from products where p_id=${req.body.pid}`, (err, result) => {
                if (err) {
                    res.send({ delete: "fail" });

                } else {
                    res.send({ delete: "sucess" });
                }
                mssql.close();
            });
        }
    });
});