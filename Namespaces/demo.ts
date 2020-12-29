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
/*
namespace Demo{
    export namespace Test1{
        export const PORT:number=4200;
    };
    export namespace Test2{
        export const PORT:number=4800;
    };
};

*/