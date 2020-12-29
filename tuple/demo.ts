//collection of heterogeneous element is called tuple
//collection of different data types elements is called tuple
/*
let arr=[10,"hello",true];
console.log(arr);//[ 10, 'hello', true ]
*/
/*
let arr=[10,"hello",true];
arr.forEach((element,index)=>{
    console.log(element,index); //10 0     hello 1       true 2

});
*/
/*
let arr=[20,30,40];
arr.push(50);
console.log(arr);//[ 20, 30, 40, 50 ]
arr.unshift(10);
console.log(arr);//[ 10, 20, 30, 40, 50 ]
arr.pop();
console.log(arr);//[ 10, 20, 30, 40 ]
arr.shift();
console.log(arr);//[ 20, 30, 40 ]

*/

/*
let arr=[10,20,30,40,50,60,70,80,90,100];
arr.splice(5,2)
console.log(arr);//[10, 20, 30,  40, 50, 80, 90, 100]
arr.splice(5,2);
console.log(arr);//[10, 20, 30, 40, 50, 100]
arr.splice(5,0,60,70,80,90);
console.log(arr);//[10,20,30,40,50,60,70,80,90,100]

arr.splice(3,1,40);
console.log(arr);//[10,20,30,40,50,60,70,80,90,100]

*/
/*
let arr=[10,20,30,40,50,60,70,80,90,100];
console.log(arr.slice(2,4));//[30,40]
console.log(arr.slice(4));//[ 50, 60, 70, 80, 90, 100 ]
console.log(arr.slice(2,-2));//[ 30, 40, 50, 60, 70, 80 ]
console.log(arr.slice(6,-4));//[]
console.log(arr.slice(6,-8));//[]
console.log(arr.slice(10));//[]
*/
/*
let arr=[`Angular`,`Node`,`MongoDb`];
let [sub_one,sub_two,sub_three]=arr;
console.log(sub_one,sub_two,sub_three);//Angular Node MongoDb
let [s1,s2]=arr;
console.log(s1,s2);//Angular Node
let [v1,v2,v3,v4]=arr;
console.log(v1,v2,v3,v4);//Angular Node MongoDb undefined
*/
let arr=[`Angular`,`AngularJS`,`Angular Material`];
let j=arr.findIndex((Element,index)=>{
    return Element==`AngularJS`;
});
console.log(j);