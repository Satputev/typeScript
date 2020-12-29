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

/*
class class_one{
    protected constructor(){}
};
let obj:class_one=new class_one();//Constructor of class 'class_one' is protected and only accessible within the class declaration.

*/
/*
class class_one{
    protected data:any;
    constructor(protected arg1:any){
this.data=arg1;
    };
protected getData():any{
    return this.data;
};
};
class class_two extends class_one{
    public data1:any=this.data;
    public getData1():any{
        return this.getData();
    };
};
let obj:class_two=new class_two("MongoDB");
console.log(obj.data1,obj.getData1());//MongoDB MongoDB

*/

