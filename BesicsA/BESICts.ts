//var keyword introduced in ES1
//in javascript we will define "blocks" by using {}
//if blocks code effecting global members, then such type of issue "Global Polluting Issue".
//Global Polluting Issue Raised Because of "var" keyword.
//we can overcome Global Polluting Issue By Using "let" keyword.
//Global members we can access in entire application.
//Local Members we can access only in particular scope

/*
var data:number = 100;
{
    var data:number = 200;
}
console.log(data);   //200
//in above case we are expecting "100" but we got 200 because of var keyword.
*/



/*
let data:number = 100;
{
    let data:number = 200;
}
console.log(data);    //100
*/


//coming to the variables 
//first==> declaratiion and initilization
//second==> displaying
//if we break the above rule, we are expecting error
//insted of error we are getting undefined.
//undefined assigned by javascript
//assigning undefined by javascript called as variable hoisting.
//we can overcome variable hoisting by using "let" keyword

/*
console.log(data);     //undefined
var data:number = 100;
//[Note: we are expecting error, but we got undefined]
*/

/*
console.log( data1 );   //Error:Block-scoped variable 'data1' used before its declaration.
let data1:number = 100;
*/


//"var" keyword allows the duplicate variables
//"let" keyword won't allows the duplicate variables.
/*
var data:number = 100;
var data:number = 200;
console.log(data);    //200
*/


/*
let data:number = 100;
let data:number = 200;
console.log(data);    //Error:Cannot redeclare block-scoped variable 'data'.
*/





/*
//var keyword breaks the scope rule
//let keyword obeys the scope rule
for(let i:number=0;i<5;i++){
};  
console.log(i);
//if we take var output is 5
//if we take let output is Error (Cannot find name 'i'.)
*/

/*
function myFun(){
    var data:number = 100;
    let data1:number = 200;
    console.log(data,data1);
};
myFun();
*/


/*
Differences Between var & let
-----------------------------
        var                             let

1) var keyword introduced       let keyword introduced
   in ES1                       in ES5

2) global polluting issue       we can overcome global
   raised because of var        polluting issue by
   keyword                      using "let" keyword


[Note : if blocks effecting global members called as global polluting issue]

3) var keyword allows the      let keyword won't
   duplicate variables         allows the duplicate 
                               variables


4) variable hoisting issue     4) we can overcome
   raised because of              variable hoisting
   var keyword                    by using let keyword


[Note : generating "undefined" insted of "Error" called as variable hoisting]


5) scope rule break by         5) scope rule obeys by
   var keyword.                   let keyword


6) behaviour of "var" and      6) behaviour of "var"      "let" is same in 
   function call                 and 
                                 "let" is same in 
                                 function call
  

*/


/*
//const
//const introduced in ES5.
//reassignment not possible in const
//we can change the content of "const" members, but reassignment not possible

const data:number = 100;
console.log( data );
data = 200;  //Cannot assign to 'data' because it is a constant.

*/


const obj:any = {
    p_id : 111
};
console.log( obj.p_id );    //111
obj.p_id = 222;
console.log( obj.p_id );    //222
obj = {};







































































































