//modifiers
//type supports following modifiers
//@public @private  @protected
//public modifier is default modifier in typescript.
//public modifier is applicable to "variables","constructor","functions".
//public modifier is not applicable for class
/*
class class_one{
    public data:string;
    public constructor(public arg1:string){
        this.data=arg1;
    };
    public getData():string{
        return this.data;
    };
};
let obj1:class_one=new class_one("Hello");
console.log(obj1.getData());//hello

*/
/*
class class_one{
    constructor(public sub_one:string,public sub_two:string,public sub_three){

    };
};
let obj:class_one=new class_one("Angular","nodeJs","MongoDB");
console.log(obj.sub_one,obj.sub_two,obj.sub_three);//Angular nodeJs MongoDB

*/
/*
class class_one{
    public data:string;
    constructor(public arg1:string){
        this.data=arg1;
    };

};

class class_two extends class_one{

};

let obj:class_two=new class_one("Hello");
console.log(obj.data)//Hello
*/
//Private
//private members we can access within the class by using "this" keyword
//we cant access private members through class object
//private modifier is applicable to "variables","constructor","functions"
var class_one = /** @class */ (function () {
    function class_one(arg1) {
        this.arg1 = arg1;
        this.data = arg1;
    }
    ;
    class_one.prototype.fun_one = function () {
        return this.data;
    };
    ;
    class_one.prototype.fun_two = function () {
        return this.fun_one();
    };
    ;
    return class_one;
}());
;
var obj = new class_one("hello");
console.log(obj.fun_two());
