//we can access protected members of 'parent class' to all 'child class'
//we cant access protected members through class object
//protected modifiers applicable to "variable " level, "function "level,"constructor" level
/*
class class_one{
    protected data:any="hello";
};
let obj:class_one=new class_one();
obj.data;//Property 'data' is protected and only accessible within class 'class_one' and its subclasses.
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
    protected constructor(){}
};
let obj:class_one=new class_one();//Constructor of class 'class_one' is protected and only accessible within the class declaration.

*/
var class_one = /** @class */ (function () {
    function class_one(arg1) {
        this.arg1 = arg1;
        this.data = arg1;
    }
    ;
    class_one.prototype.getData = function () {
        return this.data;
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data1 = _this.data;
        return _this;
    }
    class_two.prototype.getData1 = function () {
        return this.getData();
    };
    ;
    return class_two;
}(class_one));
;
var obj = new class_two("MongoDB");
console.log(obj.data1, obj.getData1());
