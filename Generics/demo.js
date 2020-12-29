//Generics
//Generics mainly for type safety
//we will represent generics by using "<>"
//because of generic code readability increases
//because of generics we will overcome the compile time errors
/*
function fun_one<A>(arg1:A):void{
    console.log(arg1);
};
fun_one(10);//10
fun_one("hello");//hello
fun_one<number>(100);//100
fun_one<string>("hello");//hello
fun_one<boolean>(true);//true
//fun_one<number>("welcome")//Argument of type '"welcome"' is not assignable to parameter of type 'number'.ts(2345)
*/
/*
function fun_one<A,B>(arg1:A,arg2:B):void{
    console.log(arg1,arg2);
};
fun_one(10,"hello");//10 hello
fun_one<number,number>(100,200);//100 200
fun_one<string,string>("hello","welcome");//hello welcome
fun_one<boolean,boolean>(true,true);//true true
fun_one<string,number>("hello",10)//hello 10
//fun_one<boolean,number>(100,true)//Argument of type '100' is not assignable to parameter of type 'boolean'.ts(2345)
*/
;
var class_one = /** @class */ (function () {
    function class_one() {
        this.data = "hello";
    }
    class_one.prototype.getData = function () {
        return this.data;
    };
    ;
    return class_one;
}());
;
var obj = new class_one();
console.log(obj.data, obj.getData());
var obj1 = {
    data: 101,
    getData: function () {
        return obj1.data;
    }
};
console.log(obj1.data, obj1.getData());
