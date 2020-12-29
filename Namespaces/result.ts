///<reference path="demo1.ts"/>
///<reference path="demo2.ts"/>
///<reference path="demo3.ts"/>

console.log(Demo1.getSub("Angular"),"<=>",Demo2.sub_two,"<=>",Demo3.obj.sub_three);//Angular <=> NodeJs <=> MongoDb
console.log(Demo1.getSub("ReactJs"),"<=>",Demo2.sub_two,"<=>",Demo3.obj.sub_three);//ReactJs <=> NodeJs <=> MongoDb
