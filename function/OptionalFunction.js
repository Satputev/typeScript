//we will represent optional parameters by using "?".
//optional parameters are introduced in ES6
//while calling functions few arguments are optional
/*
function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
console.log(arg1,arg2,arg3);
};

fun_one();      //undefined undefined undefined
*/
//combining 1.optional with reular
//2.optional with default
//3.optional with rest
//regular,optional,default,and rest
//optional with regular
/*
function fun_one(arg1:string,arg2?:string,arg3?:string):void{
    console.log(arg1,arg2,arg3);
};
//In combination of optional with regular optional should be last
//we have more than one optional

//fun_one();//- error TS2554: Expected 1-3 arguments, but got 0.
fun_one("hello");                         //hello undefined undefined
fun_one("helllo","hello","hello");        //helllo hello hello

*/
//2.optional with default
/*
function fun_one(arg1:string="hello2",arg2?:string,arg3:string="hello3",arg4?:string):void{
console.log(arg1,arg2,arg3,arg4);
};

fun_one();          //hello2 undefined hello3 undefined
fun_one(undefined,"hello",undefined,"hello");
fun_one(null,"hello",null,null);//null hello null null
*/
//3.optional with rest
/*
function f_one(arg1?:string,arg2?:string,...arg3:any):void{
    console.log(arg1,arg2,arg3);
};

f_one();                    //undefined undefined []
f_one("angular","angular");                //angular angular []

f_one("angular","angular","angular");   //angular angular [ 'angular' ]
f_one(undefined,undefined,undefined);
f_one(null,null,null);      //null null [ null ]

*/
//optional default regular rest
function fun_one(arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = "hello"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
; //rest with anyone rest should be last
//fun_one();// Expected at least 1 arguments, but got 0.
fun_one("Angular");
fun_one("angular", "angular", undefined, "angular");
fun_one(null, null, null, null);
