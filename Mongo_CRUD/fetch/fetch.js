let express = require("express");
let mongodb = require("mongodb");
module.exports = require("express").Router().get("/", (req, res) => {
    let mongodb = require("mongodb");
    let nareshIT = mongodb.MongoClient;
    //connect to workshop database
    nareshIT.connect("mongodb://localhost:27017/workshop", (err, db) => {
        if (err) {
            console.log("error !!!");
        } else {
            db.collection("products").find().toArray((err, array) => {
                if (err) {
                    console.log("error !!!!");
                } else {
                    res.send(array);
                }
            });
        }
    });
});