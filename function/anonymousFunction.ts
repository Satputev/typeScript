/*
let Fun1=():void=>{
    console.log("hello");
};
console.log(Fun1);
Fun1();
*/
/** 
let fun1=(arg1:string,arg2:string):void =>{
    console.log(arg1,arg2);
};
console.log("Angular","Nodejs","mongodb");
*/
/**
let fun1=(ui:string,server:string,backend:string):void=>{
    console.log(ui,server,backend);
};
let f_end=():string=>{
    return"angular";
};
let middleware=():string=>{
    return"serverless";
};
let database=():string=>{
    return"Mongodb";
};

fun1(f_end(),middleware(),database());
*/
/*
let fun1=():void=>{
console.log("hello");
};
setTimeout(()=>{
fun1();
},5000)
*/
/*
let fun1=(arr:Array<any>):any=>{
    console.log(arr[0],arr[1]);
};
let fun2=():string=>{
    return"es6";
};
let fun3=():string=>{
    return"es2020";
};
fun1([fun2(),fun3()]);
/*
let outer=():any=>{
    return ():string=>{
        return"hello";
    };
};
console.log(outer);
console.log(outer());
console.log(outer()());
*/
/*
let add=(arg1:number,handlar:any):any=>{
    return handlar(arg1-5,true);
};
add(10,(res:number,error:boolean):any=>{
    if(!error){
        console.log(res);
    }
    else {
console.log("error....");
    };
})
*/
/*
let da=(handler:any):any=>{
return handler(100,false)
};
da((kk:any,a:boolean):any=>{
if(!a){
console.log(kk);
};
})
*/
/*
let Fun_name=(strin:string,handler:any):any=>{
    return handler(strin+'world',false);
};
Fun_name("hello",(nam:string,bool:Boolean):any=>{
if(!bool){
    console.log(nam);
};

});*/

