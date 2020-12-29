var Demo1;
(function (Demo1) {
    function getSub(arg1) {
        return arg1;
    }
    Demo1.getSub = getSub;
    ;
})(Demo1 || (Demo1 = {}));
;
var Demo2;
(function (Demo2) {
    Demo2.sub_two = "NodeJs";
})(Demo2 || (Demo2 = {}));
;
var Demo3;
(function (Demo3) {
    Demo3.obj = {
        sub_three: "MongoDb"
    };
})(Demo3 || (Demo3 = {}));
;
///<reference path="demo1.ts"/>
///<reference path="demo2.ts"/>
///<reference path="demo3.ts"/>
console.log(Demo1.getSub("Angular"), "<=>", Demo2.sub_two, "<=>", Demo3.obj.sub_three);
console.log(Demo1.getSub("ReactJs"), "<=>", Demo2.sub_two, "<=>", Demo3.obj.sub_three);
