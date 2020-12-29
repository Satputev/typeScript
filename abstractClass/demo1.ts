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

//combination of interface, abstract class and concrete class

/*
interface interface1{
    fun_one():string;
};

abstract class class_one implements interface1{
    public fun_one():string{
        return "fun_one";
    };
abstract fun_two():string;

};
class class_two extends class_one{
    public fun_two():string{
        return"fun_two";

    };

    public fun_three():string{
        return"fun_three";
    };
};

let obj:class_two=new class_two();
console.log(obj.fun_one(),obj.fun_two(),obj.fun_three());//fun_one fun_two fun_three

*/

