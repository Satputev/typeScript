"use strict";
/*
import * as Test from "./demo1"
console.log(Test.sub_one,Test.sub_two,Test.sub_three);//Angular NodeJs MongoDB
*/
exports.__esModule = true;
/*
import {oraDB,mysqlDB} from "./demo1";
import mongoDB from "./demo1";

console.log(oraDB(),mysqlDB(),mongoDB());//Oracle connection soon... Mysql connection soon....! mongoDB data soon.........!
*/
//default keyword is the advance keyword in typescript
//default keyword is applicable to functions
//we have only "one default export" per file.
//we can ignore "{}"while importing when we use default keyword
var demo1_1 = require("./demo1");
new demo1_1["default"]("Angular").getData();
