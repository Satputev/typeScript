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

//combination of generics and non-generics
/*
function fun_one<A>(arg1:A,arg2:any):void{
    console.log(arg1,arg2);
}

fun_one(10,"hello");//10 hello

fun_one<number>(10,10);//10 10
fun_one<string>("hello","welcome");//hello welcome
fun_one<boolean>(true,true);//true true
//fun_one<number>("hello",10);//Argument of type '"hello"' is not assignable to parameter of type 'number'.ts(2345)
*/

//class with generic
/*
class class_one<A,B,C>{
    private sub1:A;
    private sub2:B;
    private sub3:C;

    constructor(private arg1:A,private arg2:B,private arg3:C){
        this.sub1=arg1;
        this.sub2=arg2;
        this.sub3=arg3;
    };

    public getSubOne():A{
        return this.sub1;
    };
    public getSubTwo():B{
        return this.sub2;
    };
    public getSubThree():C{
        return this.sub3;
    };
};


let obj:class_one<number,number,number>=new class_one(100,200,300);
console.log(obj.getSubOne(),obj.getSubTwo(),obj.getSubThree());

let obj1:class_one<string,string,string>=new class_one("Angular","Nodejs","MongoDb");//100 200 300
console.log(obj1.getSubOne(),obj1.getSubTwo(),obj1.getSubThree());//Angular Nodejs MongoDb
*/
//generic with interface

interface interface1<A,B>{
    data:A;
    getData():B;
};


class class_one implements interface1<string,string>{
data="hello";
 getData(){
    return this.data;
};
};
let obj:class_one=new class_one();
console.log(obj.data,obj.getData());//hello hello

let obj1:interface1<number,number>={
    data:101,
    getData:()=>{
        return obj1.data
    }
};
console.log(obj1.data,obj1.getData());//101 101