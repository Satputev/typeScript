//if we know partial implementation then we choose abstract class
//we will define abstract class by using abstract keyword
//classes are provides the implementation details to abstract class
/*
abstract class class_one{
    public fun_one():string{
        return"fun_one!!!";
    };
    abstract fun_two():string;
};
class class_two extends class_one{
public fun_two():string{
return"fun_two!!!";
};

}

let obj:class_two=new class_two();
console.log(obj.fun_one(),obj.fun_two());//fun_one!!! fun_two!!!

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
;
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "fun_one";
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "fun_two";
    };
    ;
    class_two.prototype.fun_three = function () {
        return "fun_three";
    };
    ;
    return class_two;
}(class_one));
;
var obj = new class_two();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
