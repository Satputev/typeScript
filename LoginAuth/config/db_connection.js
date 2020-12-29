//this file used to create and return the mysql connection object
let mysql = require("mysql");
let obj = require("./db_properties");
let conn = {
    getConnection : ()=>{
     return mysql.createConnection(obj);
    }
};
module.exports = conn;