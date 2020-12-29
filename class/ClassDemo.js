/*
class Class_One{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
constructor(){
    this.sub_one="Angular";
    this.sub_two="NodeJs";
    this.sub_three="MongoDb";
};
public getSub_one():string{
    return this.sub_one;
}
public getSubTwo():string{
    return this.sub_two;

}
public getSubThree():string{
    return this.sub_three;
}
}
let obj1:Class_One=new Class_One();
console.log(obj1.getSub_one(),obj1.getSubTwo(),obj1.getSubThree());

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class class_one{
    public my_Fun():any{
        return new Class_Two();
    }
}
class Class_Two{
    public my_Fun():string{
        return "hello";
    }
}
console.log(new class_one().my_Fun().my_Fun());
*/
//parameterised constructor
/*
class Class_one{
private var1:string;
private var2:string;
private var3:string;
constructor(private arg1:string,private arg2:string,private arg3:string){
    this.var1=arg1;
    this.var2=arg2;
    this.var3=arg3;
};
public getData():void{
    console.log(this.var1,this.var2,this.var3);
}
}

let obj1:Class_one=new Class_one("Angular","NodeJs","MongoDb");
obj1.getData();

let obj2:Class_one=new Class_one("ReactJs","NodeJs","MysQl");
obj2.getData();

let obj3:Class_one=new Class_one("vueJs","serverless","SQLServer");
obj3.getData();
*/
//Inheritance 
//we will implement the inheritance by using "extends" keyword
//we have following types of inheritance
//@single level inheritance
//@Multilevel inheritance
//@multiple inheritance
//@hybrid inheritance
//single level inheritance
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.myFun = function () {
        return "FunOne!!!!";
    };
    ;
    return Parent;
}());
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.myFun2 = function () {
        return "fun_two!!!";
    };
    ;
    return Child;
}(Parent));
;
//now child class contains two functions here
var c = new Child();
console.log(c.myFun(), c.myFun2());
//parent class contain only one function
var p = new Parent();
console.log(p.myFun());
//parent class reference wants to hold child class object
//we can access only parent class data
var obj1 = new Child();
console.log(obj1.myFun());
//child class want to hold the parent class object
//this combination is not possible
//let obj2:Child=new Parent();
