/*
 interface interface1{
     data:any;
     getData():any;
 };

 let obj:interface1={
     data:"hello",
     getData:():any=>{
         return obj.data;
     }
 };
 console.log(obj.data,obj.getData());//hello hello
 */



 //single level inheritance
/*
 interface interface1{
     sub_one:string;
 };
interface interface2 extends interface1{
    sub_two:string;
};

class my_class implements interface2{
    sub_one:string;
    sub_two:string;

    constructor(){
this.sub_one="NodeJs";
this.sub_two="Go";

    };
};

console.log(new my_class().sub_one,new my_class().sub_two);//NodeJs Go
*/


//multilevel inheritance

/*
interface interface1{
    getSub_one():string;
};

interface interface2 extends interface1{
    getSub_two():string;
};

interface interface3 extends interface2{
    getSub_three():string;
};

class my_class implements interface3{
    public getSub_one():string{
        return "mean Stack...";
    };

    public getSub_two():string{
        return"mern stack...";
    };
    public getSub_three():string{
        return"mevn stack";
    };
};
let obj:my_class=new my_class();
console.log(obj.getSub_one(),obj.getSub_two(),obj.getSub_three());//mean Stack... mern stack... mevn stack

*/

//multiple inheritance

/*
interface interface1{
    fun_one():string;

};

interface interface2{
    fun_two():string;
};

interface interface3 extends interface1,interface2{
    fun_three():string;
};
class my_class implements interface3{
    public fun_one():string{
        return"hello1";

    };

    public fun_two():string{
        return "hello2";
    };
    public fun_three():string{
        return "hello3";
    };
};
console.log(new my_class().fun_one(),new my_class().fun_two(),new my_class().fun_three());//hello1 hello2 hello3
*/


//hybrid inheritance
/*
interface Parent{
    data1:string;
};
interface Child1 extends Parent{
    data2:string;
};
interface Child2 extends Parent{
    data3:string;
};

interface child3 extends Child1,Child2{
    data4:string;
};

class my_class implements child3{
    data1:string;
    data2:string;
    data3:string;
    data4:string;
constructor(){
    this.data1="hello1";
    this.data2="hello2";
    this.data3="hello3";
    this.data4="hello4";
};

};
let obj:my_class=new my_class();
console.log(obj.data1,obj.data2,obj.data3,obj.data4);//hello1 hello2 hello3 hello4

let obj1:child3={
    data1:"hello1",
    data2:"hello2",
    data3:"hello3",
    data4:"hello4"
};
console.log(obj1.data1,obj1.data2,obj1.data3,obj1.data4);//hello1 hello2 hello3 hello4

*/