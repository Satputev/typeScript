//Namespaces
//logical groping of related functionalities called as namespaces
//namespaces also called as 'internal modules' in typescript
//we will define namespaces using "namespace" keyword
//we will import namespaces by using following syntax:
/////<reference path="namespace file"/>
//namespace applicable to variables,functions,classes and interfaces
/*
namespace Demo{
    export let CSE:number=180;
    export let ECE:number=240;
};
*/
/*
namespace Demo{
    export let data:string="Rest data soon..";
    export let arr:Array<number>=[20,30,50,80,60];
    export let obj:any={
        sub_one:"AngularJs",
        sub_two:"NodeJs",
        sub_three:"MongoDB"
    };
    export function getData():string{
        return data;
    };
};

*/
//nested namespaces
/*
namespace Demo1{
    export namespace Demo2{
        export function mean():void{
            console.log("Mean soon....");
        };
    };

};
*/
var Demo;
(function (Demo) {
    let Test1;
    (function (Test1) {
        Test1.PORT = 4200;
    })(Test1 = Demo.Test1 || (Demo.Test1 = {}));
    ;
    let Test2;
    (function (Test2) {
        Test2.PORT = 4800;
    })(Test2 = Demo.Test2 || (Demo.Test2 = {}));
    ;
})(Demo || (Demo = {}));
;
/*
///<reference path="demo.ts"/>
console.log(Demo.CSE,Demo.ECE);//180 240
*/
/*
///<reference path="demo.ts"/>
console.log(Demo.data);//Rest data soon..
Demo.arr.forEach((element,index)=>{
    console.log(element);//20 30 50 80 60
});

console.log(Demo.obj.sub_one,Demo.obj.sub_two,Demo.obj.sub_three);//AngularJs NodeJs MongoDB
console.log(Demo.getData());//Rest data soon..
*/
//nested namespaces
/*
///<reference path="demo.ts"/>
Demo1.Demo2.mean();//Mean soon....

*/
///<reference path="demo.ts"/>
console.log(Demo.Test1.PORT, Demo.Test2.PORT);
