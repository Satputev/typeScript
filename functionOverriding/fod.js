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
//function overriding
//overriding parent class  functionality  with child class functionality is called as function overriding.
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.dbDATA = function () {
        return "Mongodb Data soon...";
    };
    ;
    Parent.prototype.Test = function () {
        return "test successfully";
    };
    return Parent;
}());
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.dbDATA = function () {
        return "firebase data soon...";
    };
    ;
    return Child;
}(Parent));
;
var obj = new Child();
console.log(obj.dbDATA()); //firebase data soon...
//parent reference child object
var obj1 = new Child();
console.log(obj.dbDATA()); //firebase data soon...
//child reference parent object
var obj2 = new Parent();
console.log(obj2.dbDATA()); //Mongodb Data soon...
console.log(obj2.Test()); //test successfully
//console.log(obj2.Show());// Property 'Show' is missing in type 'Parent' but required in type 'Child'.
