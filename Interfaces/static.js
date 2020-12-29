//static members we can access by "Class names "directly
//we cant access static members by using class object
//static members memory will be alloted in "stack area"
//initialization is not possible to static members
//static keyword applicable to "variables " level and "functions" level
/*
class class_one{
    static constructor(){}//'static' modifier cannot appear on a constructor declaration.ts(1089)

};
*/
//static keyword cannot applicable to "class "level and "constructor" level
/*
class class_one{
    static data:any;
    constructor(){
        this.data="hello";//Property 'data' is a static member of type 'class_one'ts(2576)

    };
};

*/
//initialization not possible to static members
/*
class class_one{
    static data:any="hello";

};

let obj:class_one=new class_one();
obj.data;//Property 'data' is a static member of type 'class_one'ts(2576)
*/
//creating object with private constructor
/*
class class_one{
    private constructor(){};
    static fun_one():any{
        return new class_one();
    };
    public fun_two():any{
        return"hello";
    };
};

console.log(class_one.fun_one().fun_two());//hello

*/
//readonly
//readonly is keyword introduced in typescript
//readonly keyword used to read the data(access the data) but we cant update the data
//we can initialize readonly members by using constructors
/*
class class_one{
    readonly data:any;
    constructor(arg1:any){
        this.data=arg1;
    };
};
let obj:class_one=new class_one("hello");
console.log(obj.data);//hello
obj.data="welcome";//Cannot assign to 'data' because it is a read-only property.ts(2540)
*/
