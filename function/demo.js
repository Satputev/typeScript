//Rest parameters in functions
//rest parameters have the capability to hold the multiple values(array of values)
//we use rest parameters by using (...) symbol
//... this operator called as spread operator 
//the spread operator introduced in ES6
/*
function fun_one(...arg1:any):void{
    console.log(arg1);
};

fun_one();                          //[]
fun_one(10);                        //[10]
fun_one(10,"hello");                //[10, 'hello]
fun_one(undefined);                 //[undefined]
fun_one(undefined,undefined);       //[undefined,undefined]
fun_one(null);                      //[null]
fun_one(null,null);                 //[null,null]

*/
/*

function fun_one(arg1:any,...arg2:any):void{
console.log(arg1,arg2);
};

//fun_one(); //Expected at least 1 arguments, but got 0.ts(2555)

fun_one(10);                    //10[]

fun_one(10,10);                 //10[10]

fun_one(undefined);             //undefined[]
fun_one(undefined,undefined);   //undefined[undefined]
fun_one(null,null);             //null[null]
fun_one(undefined,null);        //undefined[null]

*/
/*
function fun_one(arg1:any,arg2:any,...arg3:any):void{
    console.log(arg1,arg2,arg3);
};

//fun_one();        //Expected at least 2 arguments, but got 0.ts(2555)
//fun_one(10);      //Expected at least 2 arguments, but got 1.ts(2555)
 fun_one(10,10,10); //10 10 [10]

 */
//default parameterization function
//while defining function few argument have default value
/*
 function fun_one(arg1:string="angular",arg2:string="nodejs",arg3:string="mongodb"):void{
     console.log(arg1,arg2,arg3);
 };

 fun_one();         //angular nodejs mongodb
 fun_one("reactjs");//reactjs nodejs mongodb
 fun_one(undefined,"aws","sqlserver");//angular aws sqlserver
 fun_one(null);//null nodejs mongodb

 */
//named with default
/*
function fun_one(arg1:any,arg2:string="hello2",arg3:any,arg4:string="hello4"):void{
  console.log(arg1,arg2,arg3,arg4);
};
//fun_one();//Expected 3-4 arguments, but got 0.ts(2554)

fun_one("hello1",undefined,"hello3",undefined);//hello1 hello2 hello3 hello4
fun_one(null,null,null,null);//null null null null
*/
//default with rest
//rest should be last
/*
function fun_one(arg1:string="hello",...arg2:any):void{
    console.log(arg1,arg2);
};

fun_one();//hello []
fun_one(undefined,"hello");//hello [ 'hello' ]
fun_one(null,"hello");//null [ 'hello' ]

*/
//named ,default rest
//rest parameter should be last
function fun_one(arg1, arg2) {
    if (arg2 === void 0) { arg2 = "hello2"; }
    var arg3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg3[_i - 2] = arguments[_i];
    }
    console.log(arg1, arg2, arg3);
}
;
//fun_one();//Expected at least 1 arguments, but got 0.ts(2555)
fun_one(10); //10 hello2 []
fun_one("hello1", undefined, "hello3"); //hello1 hello2 [ 'hello3' ]
