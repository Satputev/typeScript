

/*
//multilevel inheritance

class Parent{
    public mean():string{
return "meanStack....!";
    };
};
class Child extends Parent{
    public mern():string{
        return"MEarnStack";
    };
};

class subChild extends Child{
    public mevn():string{
        return"Mevn stack....!";
    };
};

//using subclass object we can call three functions

let obj1:subChild=new subChild();
console.log(obj1.mean(),obj1.mern(),obj1.mevn());

//using child class objec we can call two methods

let obj2:Child=new Child();
console.log(obj2.mean(),obj2.mern());

//using parent class object we can call only one method

let obj3:Parent=new Parent();
console.log(obj3.mean());


//parent class reference want to hold the subChild object
//we can call only one function(mean())

let obj4:Parent=new subChild();
console.log(obj4.mean());

//parent class reference want to hold the child class object
//we can able to call only one function (mean())

//child class reference want to hold the subChild object
//using that we can able to call 2 methods(mean()& mern());
*/
//multiple inheritance


//class parent1{};
//class parent2{};
//class child extends parent1,parent2{};

//multiple inheritance is not supported by typescript

//hybrid inheritance
//class c1{};
//class c2 extends c1{};
//class c3 extends c1{};
//class c4 extends c2,c3{};
//hybrid inheritance is not supported by typescript
//polymorphism

//behaves like many is called polymorphism
//polymorphism we have two types
// @ function overloading
//@ function overriding

//function overloading
//behaviour of function is depends on "arguments datatype" in function overloading

/*
function my_fun(arg1:number,arg2:number):void;
function my_fun(arg1:string,arg2:string):void;
function my_fun(arg1:any,arg2:any):any{
    console.log(arg1+arg2);
};

my_fun(10,20);//30

my_fun("welcome to"," angular");//welcome to angular
*/
//with switch case
/*
class class_one{
    public display(arg1:number):number;
    public display(arg1:string):string;
    public display(arg:boolean):boolean;

public display(arg1:any):any{
switch(typeof(arg1)){
    case "number":
        return arg1*10;
    case "string":
        return"welcome to"+arg1;
    case "boolean":
        return"boolean";
};


};

};

let obj:class_one=new class_one();
console.log(obj.display(10));   //100
console.log(obj.display("Angular"));//welcome to angular
console.log(obj.display(true));//boolean
*/

