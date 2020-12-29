
function addition(a:string,b:string):void{
console.log(a+b);

};
addition("hello","bhbh");

let Arex:Array<number>=[10,20,30,40,50];
let Arex2:number[]=[50,40,30,20,10];

Arex2.forEach(function(element,index) {
    console.log(element,Arex[index]);
});