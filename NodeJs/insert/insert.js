//this module used to insert the data into products collection
module.exports = require("express").Router()
                 .post("/",(req,res)=>{
    //create the JSON Object based on client data
    let obj = {
        p_id    :   req.body.p_id,
        p_name  :   req.body.p_name,
        p_cost  :   req.body.p_cost
    };
    //import mongodb module
    let mongodb = require("mongodb");

    //create the client
    let nareshIT = mongodb.MongoClient;

    //connect to workshop database
    nareshIT.connect("mongodb://localhost:27017/workshop",(err,db)=>{
        db.collection("products").insertOne(obj,
                                      (err,result)=>{
            if(err){
                res.send({insert:"fail"});
            }else{
                res.send({insert:"success"});
            }
        });
    });
});