//interfaces
//if we know only declarations (method names) but we dont know function implementation then
//we will choose interfaces

//we will declare interfaces by using "interface" keyword
//interface implementations known by either 'JSON' or 'classes'


/*
interface interface1{
    data:any;
};

let obj1:interface1={
    data:"mysql..."
};

let obj2:interface1={
    data:"mongoDB"
};

let obj3:interface1={
    data:"mongoose"
};

console.log(obj1.data,obj2.data,obj3.data);//mysql... mongoDB mongoose
*/
/*
interface interface1{
    getData():string;
};

let obj1:interface1={
getData:():string=>{
    return"mysql CRUD operation soon"
}
};
let obj2:interface1={
    getData:():string=>{
        return"SQL server CRUD operation soon...."
    }
};

let obj3:interface1={
    getData:():string=>{
        return"MongoBD CRUD operations soon"
    }
};s


console.log(obj1.getData(),obj2.getData(),obj3.getData());//mysql CRUD operation soon SQL server CRUD operation soon
//.... MongoBD CRUD operations soon

 */
