/*
 interface interface1{
     data:any;
     getData():any;
 };

 let obj:interface1={
     data:"hello",
     getData:():any=>{
         return obj.data;
     }
 };
 console.log(obj.data,obj.getData());//hello hello
 */
;
;
;
;
var my_class = /** @class */ (function () {
    function my_class() {
        this.data1 = "hello1";
        this.data2 = "hello2";
        this.data3 = "hello3";
        this.data4 = "hello4";
    }
    ;
    return my_class;
}());
;
var obj = new my_class();
console.log(obj.data1, obj.data2, obj.data3, obj.data4); //hello1 hello2 hello3 hello4
var obj1 = {
    data1: "hello1",
    data2: "hello2",
    data3: "hello3",
    data4: "hello4"
};
console.log(obj1.data1, obj1.data2, obj1.data3, obj1.data4);
