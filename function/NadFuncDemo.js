/*
function my_function():string{
return"hello Function";

};
console.log(my_function);
console.log(my_function());
*/
/*
function my_fun(arg1:string,arg2:string,arg3:string):void{
console.log(arg1,arg2,arg3);

};
my_fun(`angular`,`NodeJs`,`MongoDb`);
my_fun(`ReactJs`,`Aws`,`CouchDb`);
*/
/*
function fun_one():any{
return fun_two;

};
function fun_two():string{
    return"Welcome";
};
console.log(fun_one);
console.log(fun_one());
console.log(fun_one()());
*/
/*
function fun_one(arg1:any):any{
    return fun_two(arg1);
};
function fun_two(arg1:any):any{
    return arg1;
};
console.log(fun_one("hello"));
*/
/*
function fun_one(arg1:any,arg2:any,arg3:any):any{
console.log(fun_two(),fun_three(),fun_four())

};
function fun_two():string{
    return`angular`;
};
function fun_three():string{
    return`Nodejs`;
};
function fun_four():string{
    return`MongoDB`;
}

fun_one(fun_two,fun_three,fun_four);
*/
/*
function fun1():any{
    return fun2;
};
function fun2():any{
    return fun3;
};
function fun3():string{
    return`Named Function`;
};
console.log(fun1);
console.log(fun1());
console.log(fun1()());
console.log(fun1()()());
*/
/*
function fun1():string{
    return`hello`;
};
setTimeout(function(){
 console.log(fun1());
},10000);
*/
function my_fun() {
    return "hello";
}
;
setInterval(function () {
    console.log(my_fun());
}, 5000);
