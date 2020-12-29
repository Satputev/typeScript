//this file acting as module
//this module used to fetch the data from products collection

//import express module
//require() is the predefined function in NodeJS, used to import the modules
module.exports = require("express").Router()
                 .get("/",(req,res)=>{
    //import mongodb module
    let mongodb = require("mongodb");

    //create the client
    let nareshIT = mongodb.MongoClient;

    //connect to workshop database
    nareshIT.connect("mongodb://localhost:27017/workshop",(err,db)=>{
        if(err){
            console.log("error !!!");
        }else{
            db.collection("products")
            .find().toArray((err,array)=>{
                if(err){
                    console.log("error !!!");
                }else{
                    res.send(array);
                }
            });
        }
    });
});