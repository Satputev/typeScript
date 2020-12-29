//this file used to create the module
//this file used to compare the "client login credentials(login form)" with the database table(login_details).

let conn = require("../config/db_connection");

let connection = conn.getConnection();

let my_fun = require("../config/generate_token");


module.exports = require("express")                                    .Router()
                 .post("/",(req,res)=>{
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
            (err,records,fields)=>{
        if(records.length>0){
            let token = my_fun("LoginDemo","abcd");
            res.send({login:"success",token:token});
        }else{
            res.send({login:"fail"});
        }
    })
});







