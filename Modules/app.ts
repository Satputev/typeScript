/*
import * as Test from "./demo1"
console.log(Test.sub_one,Test.sub_two,Test.sub_three);//Angular NodeJs MongoDB
*/

/*
import {oraDB,mysqlDB} from "./demo1";
import mongoDB from "./demo1";

console.log(oraDB(),mysqlDB(),mongoDB());//Oracle connection soon... Mysql connection soon....! mongoDB data soon.........!
*/

//default keyword is the advance keyword in typescript
//default keyword is applicable to functions
//we have only "one default export" per file.
//we can ignore "{}"while importing when we use default keyword

import mean from "./demo1";
new mean("Angular").getData();//Angular